import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto.model';
import { CarritoService } from '../carrito.service';
import { data } from 'jquery';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  items: Producto[] = [];
  total:number=0;
  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.cartItems$.subscribe(data => {
      this.items = data;
    });
    this.getTotal();
  }

  onDelete(id:number){
    this.carritoService.removeItem(id);
    this.getTotal();
  }

  getTotal(){
    const items= this.carritoService.getCartItems();
    let subs=0;
    for(const item of items)
      subs+=item.price*item.qty;

    this.total=subs;
  }

  qtyChange(event: any, itemId: number,itemqty:number){
    const newQty = event.target.value;
    const previousQty = itemqty;

    // Verificar si el nuevo valor es negativo
    if (newQty < 1) {
      // Restaurar el valor anterior
      event.target.value = previousQty;
    } else {
      console.log('Nuevo valor de cantidad:', newQty);
      this.carritoService.updateItemQuantity(itemId,newQty);
      // Realiza cualquier acción necesaria con el nuevo valor de cantidad y el ID del item
    }
    this.getTotal();
  }
}
