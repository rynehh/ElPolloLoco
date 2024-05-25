import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto.model';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{
items:Producto[]=[];
constructor(private carritoService:CarritoService){

}

  ngOnInit(): void {
    this.carritoService.cartItems.subscribe(data=>{
      this.items=data;
    })
  }


}
