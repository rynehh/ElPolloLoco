import { Injectable } from '@angular/core';
import { Producto } from './producto.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private cartItems = new BehaviorSubject<Producto[]>([]);
  private lastCart = new BehaviorSubject<Producto[]>([]);
  cartItems$ = this.cartItems.asObservable(); // Observable para que otros componentes puedan suscribirse
  lastCart$=this.lastCart.asObservable();
  constructor() {
    this.loadCart();
    this.loadLastCart();
  }

  // Cargar el carrito desde localStorage al iniciar el servicio
  private loadCart() {
    const ls = localStorage.getItem('carrito');
    if (ls) {
      const parsedLS: Producto[] = JSON.parse(ls);
      if (Array.isArray(parsedLS)) {
        this.cartItems.next(parsedLS);
      }
    }
  }

  // Sincronizar el carrito con localStorage y BehaviorSubject
  private syncCartItems(newCart: Producto[]) {
    this.cartItems.next(newCart);
    localStorage.setItem('carrito', JSON.stringify(newCart));
  }

  private setLastCart(newCart: Producto[]) {
    this.cartItems.next(newCart);
    localStorage.setItem('ultimoCarrito', JSON.stringify(newCart));
  }

  // Obtener el carrito actual
  getCartItems(): Producto[] {
    return this.cartItems.getValue();
  }

  // Agregar un elemento al carrito
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

  // Actualizar la cantidad de un elemento en el carrito
  updateItemQuantity(productId: number, quantity: number) {
    const currentCart = this.getCartItems();
    const item = currentCart.find((product) => product.id === productId);

    if (item) {
      item.qty = quantity;
      this.syncCartItems(currentCart);
    }
  }

  // Eliminar un elemento del carrito
  removeItem(productId: number) {
    const currentCart = this.getCartItems();
    const updatedCart = currentCart.filter((product) => product.id !== productId);
    this.syncCartItems(updatedCart);
  }

  // Limpiar el carrito
  clearCart() {
    this.setLastCart( this.getCartItems());
    this.syncCartItems([]);
  }

  private loadLastCart() {
    const ls = localStorage.getItem('ultimoCarrito');
    if (ls) {
      const parsedLS: Producto[] = JSON.parse(ls);
      if (Array.isArray(parsedLS)) {
        this.lastCart.next(parsedLS);
      }
    }
  }

  getLastCart(): Producto[] {
    return this.lastCart.getValue();
  }

  setCartLastCart(){
    this.syncCartItems(this.getLastCart())
  }

}