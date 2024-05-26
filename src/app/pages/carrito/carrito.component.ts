import { Component, OnInit, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto.model';
import { CarritoService } from '../carrito.service';
import $ from 'jquery'; 
import { AuthenticationService } from '../../services/authentication.service';
import { Carritos } from '../carritos.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  form!: FormGroup;
  items: Producto[] = [];
  total:number=0;
  itemInCart:number=0;
  lastcart:Producto[] = [];
  aus=inject(AuthenticationService);
  constructor(private carritoService: CarritoService, private router: Router,private authService: AuthenticationService,  private formbuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      calle: ['', [Validators.required]],
      colonia: ['', [Validators.required]], 
      ciudad:  ['', [Validators.required]],
      cp: ['', [Validators.required]],
      nombreP: ['', [Validators.required]],
      numT: ['', [Validators.required]], 
      exp:  ['', [Validators.required]],
      cvv: ['', [Validators.required]],
    });
    this.carritoService.lastCart$.subscribe(ldata=>{
      this.lastcart=ldata;
      this.getTotal();
    });
    this.carritoService.cartItems$.subscribe(data => {
      this.items = data;
      this.getTotal();
    });
    this.aus.user$.subscribe(user=>{
      if (user != null) {
        this.actualizarCarritos();
      }
    });
    this.getTotal();
  }

  onDelete(id:number){
    this.carritoService.removeItem(id);
    this.getTotal();
    this.actualizarCarritos();
  }

  getTotal(){
    const items= this.carritoService.getCartItems();
    let subs=0;
    for(const item of items)
      subs+=item.price*item.qty;

    this.total=subs;
  }
 
  cleananset(){
    this.aus.user$.subscribe(user=>{
      if(user?.displayName!=null){
        this.carritoService.clearCart();
        this.actualizarCarritos();
        //trigger de correo
      } else{
        this.router.navigate(['signin']);
      }
    });
  }

  
  qtyChange(event: any, itemId: number,itemqty:number){
    const newQty = event.target.value;
    const previousQty = itemqty;

    // Verificar si el nuevo valor es negativo
    if (newQty < 1) {
      // Restaurar el valor anterior
      event.target.value = previousQty;
      this.actualizarCarritos();
    } else {
      console.log('Nuevo valor de cantidad:', newQty);
      this.carritoService.updateItemQuantity(itemId,newQty);
      this.actualizarCarritos();
    }
    this.getTotal();
  }


  getusuario(){
    return this.authService.currentUserSig();
  }

  logout(): void {
    console.log("Entering logout");
    this.actualizarCarritos();
    this.authService.logout();

  }

    actualizarCarritos(){
      const user=this.authService.currentUserSig();
      if(user){
        const car=new Carritos(user.email,JSON.stringify(this.carritoService.getCartItems()), JSON.stringify(this.carritoService.getLastCart()));
        this.carritoService.addCarrito(car);
      }
    }
}

$(document).ready(function(){
  $("#buttoncol").click(function(){
    $("#navbarCollapse").slideToggle("slow");
  });
});
