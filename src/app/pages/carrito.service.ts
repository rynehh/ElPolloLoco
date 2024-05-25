import { Injectable } from '@angular/core';
import { Producto } from './producto.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  cartItems = new BehaviorSubject<Producto[]>([]);

  constructor() { 
    const ls = localStorage.getItem('carrito');
    if (ls) {
      const parsedLS: Producto[] = JSON.parse(ls);
      if (Array.isArray(parsedLS)) {
        this.cartItems.next(parsedLS);
      }
    }
  }

  addItem(product: Producto) {
    const ls = localStorage.getItem('carrito');
    let exist: Producto | undefined;
    let parsedLS: Producto[] = [];

    if (ls) {
      parsedLS = JSON.parse(ls);
      if (Array.isArray(parsedLS)) {
        exist = parsedLS.find((item: Producto) => item.id === product.id);
      } else {
        parsedLS = [];
      }
    }

    if (exist) {
      exist.qty++;
      this.setCartData(parsedLS);
    } else {
      const newData = [...parsedLS, product];
      this.setCartData(newData);
      this.cartItems.next(newData);
    }
  }

  setCartData(data: Producto[]) {
    localStorage.setItem('carrito', JSON.stringify(data));
  }
}