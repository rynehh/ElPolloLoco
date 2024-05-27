import { Injectable, inject } from '@angular/core';
import { Producto } from './producto.model';
import { BehaviorSubject } from 'rxjs';
import { Carritos } from './carritos.model';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private cartItems = new BehaviorSubject<Producto[]>([]);
  private lastCart = new BehaviorSubject<Producto[]>([]);
  private carritos= new BehaviorSubject<Carritos[]>([]);
  cartItems$ = this.cartItems.asObservable(); 
  lastCart$=this.lastCart.asObservable();
  carritos$=this.carritos.asObservable();
  aus=inject(AuthenticationService);
  constructor() {
    this.loadCarritos();
    this.loadCart();
    this.loadLastCart();
  }

  private loadCart() {
    this.aus.user$.subscribe(user=>{
    const ls = localStorage.getItem('carritos');
    if (ls) {
      if (user == null){
        this.syncCartItems([]);
      }else{
        const currentCarts = this.getCarritos();
        let exist: Carritos | undefined = currentCarts.find((item: Carritos) => item.email === user.email);
        
        if(exist){
          const parsedLS: Producto[]=JSON.parse(exist.carrito);
          if (Array.isArray(parsedLS)) {
          this.cartItems.next(parsedLS);
        }
        }
      }
      
    }
  });
  }



  private syncCartItems(newCart: Producto[]) {
    this.cartItems.next(newCart);
    localStorage.setItem('carrito', JSON.stringify(newCart));
  }

  private setLastCart(newCart: Producto[]) {
    this.lastCart.next(newCart);
    localStorage.setItem('ultimoCarrito', JSON.stringify(newCart));
  }


  getCartItems(): Producto[] {
    return this.cartItems.getValue();
  }


  addItem(product: Producto) {
    const currentCart = this.getCartItems();
    let exist: Producto | undefined = currentCart.find((item: Producto) => item.id === product.id);

    if (exist) {
      exist.qty++;
    } else {
      currentCart.push(product);
    }

    this.syncCartItems(currentCart);
  }


  updateItemQuantity(productId: number, quantity: number) {
    const currentCart = this.getCartItems();
    const item = currentCart.find((product) => product.id === productId);

    if (item) {
      item.qty = quantity;
      this.syncCartItems(currentCart);
    }
  }


  removeItem(productId: number) {
    const currentCart = this.getCartItems();
    const updatedCart = currentCart.filter((product) => product.id !== productId);
    this.syncCartItems(updatedCart);
  }

  clearCart() {
    this.setLastCart( this.getCartItems());
    this.syncCartItems([]);
  }

  private loadLastCart() {
    this.aus.user$.subscribe(user=>{
    const ls = localStorage.getItem('carritos');
    if (ls) {
      if (user == null){
        this.setLastCart([]);
      }else{
        const currentCarts = this.getCarritos();
        let exist: Carritos | undefined = currentCarts.find((item: Carritos) => item.email === user.email);
        
        if(exist){
          const parsedLS: Producto[]=JSON.parse(exist.ultimoCarrito);
          if (Array.isArray(parsedLS)) {
          this.lastCart.next(parsedLS);
        }
        }
      }
      
    }
  });
  }

  getLastCart(): Producto[] {
    return this.lastCart.getValue();
  }

  setCartLastCart(){
    this.syncCartItems(this.getLastCart())
  }



  //CARRITOS DE MULTIPLES USUARIOS
  loadCarritos() {
    const ls = localStorage.getItem('carritos');
    if (ls) {
      try {
        const parsedLS: Carritos[] = JSON.parse(ls);
        this.carritos.next(parsedLS);
      } catch (error) {
        console.error('Error al cargar carritos desde localStorage:', error);
      }
    }
  }

  getCarritos(): Carritos[] {
    return this.carritos.getValue();
  }

  setCarritos(newCart: Carritos[]){
      localStorage.setItem('carritos', JSON.stringify(newCart));
  }

  syncCarritos(newCarritos: Carritos[]) {
    this.carritos.next(newCarritos);
    localStorage.setItem('carritos', JSON.stringify(newCarritos));
  }

  addCarrito(Carrito: Carritos) {
    const currentCarts = this.getCarritos();
    let exist: Carritos | undefined = currentCarts.find((item: Carritos) => item.email === Carrito.email);

    if (exist) {
      exist.carrito=JSON.stringify(this.getCartItems());
      exist.ultimoCarrito=JSON.stringify(this.getLastCart());
    } else {
      currentCarts.push(Carrito);
    }
    this.syncCarritos(currentCarts);
  }


}