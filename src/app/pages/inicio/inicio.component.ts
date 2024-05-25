import { Component, OnInit, inject } from '@angular/core';
import introJs from 'intro.js'; 
import $ from 'jquery'; 
import { Producto } from '../producto.model';
import{ ProductoService } from '../producto.service';
import{ CarritoService } from '../carrito.service';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css',
  ]
})
export class InicioComponent implements OnInit {
  productos:Producto[]=[];
  itemInCart:number=0;
  aus=inject(AuthenticationService);
  currentCategory: string | null = null;
  constructor(private productoService:ProductoService, private carritoService:CarritoService, private authService: AuthenticationService){}

  ngOnInit(): void {

    this.carritoService.cartItems$.subscribe(d=>{
      this.itemInCart=d.length;
         console.log(d);
         console.log(this.itemInCart);
        });
    this.productos=this.productoService.getProductos();
    this.aus.user$.subscribe(user=>{
      console.log("hola por fin entre aqui en inicio",this.aus.currentUserSig());
      if (user == null) {
        console.log("soy el usuario", this.getusuario());
        $(document).ready(function(){
          introJs().setOptions({
            steps: [{
              element: document.querySelector('#signin') as HTMLElement,
              title: "👆",
              intro: "Haz clic aquí para iniciar sesión."
            }, {
              element: document.querySelector('#regis') as HTMLElement,
              title: "👆",
              intro: "Haz clic aquí para crear una cuenta."
            },{
              element: document.querySelector('#sucur') as HTMLElement,
              title: "👆",
              intro: "Haz clic aquí para ver nuestras sucursales."
            },{
              element: document.querySelector('#promos') as HTMLElement,
              title: "👆",
              intro: "Haz clic aquí para ver nuestras promociones."
            },{
              element: document.querySelector('#carro') as HTMLElement,
              title: "👆",
              intro: "Haz clic aquí para ver el carrito de compra."
            }]
      
          }).start();
      
          introJs().start();
      
        });
      
      }
    });

    

    $(document).ready(function(){
      $("#buttoncol").click(function(){
        $("#navbarCollapse").slideToggle("slow");
      });
    });
  }
  ngAfterViewInit(): void {
    $(document).ready(() => {
      $('.vermas').on('click', (event) => {
        const category = $(event.currentTarget).siblings('input[name="categoria"]').val() as string | undefined;
        if (category === undefined) {
          this.currentCategory = null;
        } else if (this.currentCategory === category) {
          this.currentCategory = null;
          $('.menu-producto').parent().show();
        } else {
          this.currentCategory = category;
          $('.menu-producto').parent().show();
          $('.menu-producto').parent().filter(function() {
            return $(this).find('input[name="categoria"]').val() !== category;
          }).hide();

          // Desplazar suavemente a la sección de productos
          $('html, body').animate({
            scrollTop: $('#productos').offset()?.top
          }, 100);
        }

     
      });
         
      $("#menunav").click(function(event) {
        event.preventDefault();
        var menuElement = $("#menu");
        if (menuElement && menuElement.length > 0) {
          var menuPosition = $('#menu').offset()?.top
          if(menuPosition==undefined)
            menuPosition=0;

          var scrollToPosition = menuPosition - 150;
            // Desplazar suavemente la página hasta la posición del menú
            $("html, body").animate({
                scrollTop: scrollToPosition
            }, 100); // El número 1000 es la duración en milisegundos del desplazamiento (1 segundo)
        }
     });
    });

  }
   
logout(){
  console.log("entre a logout");
  this.authService.logout();
}

getusuario(){
  return this.authService.currentUserSig();
}

  agrAlCarrito(producto:Producto){
    if(producto.id===18){
      this.carritoService.setCartLastCart();
    }else{
      this.carritoService.addItem(producto);
    }
  }
  menuSections = [
    { title: '¡Tu último pedido!', description: '¿Disfrutaste tu última comida? ¡Vuelve a ordenarla!', imageUrl: '/assets/imagenes/pollo.png' ,category:"UP"},
    { title: 'Pollos', description: '¡Disfruta de un Pollo Loco!', imageUrl: '/assets/imagenes/pollo.png', category:"Pollo" },
    { title: 'Combos', description: '¡Los mejores combos para disfrutar!', imageUrl: '/assets/imagenes/combo.png', category:"Combos"},
    { title: 'Complementos', description: 'Para disfrutarse con tu pollo', imageUrl: '/assets/imagenes/comp.png',category:"Complementos" },
    { title: 'Bebidas', description: 'Refréscate con las mejores bebidas', imageUrl: '/assets/imagenes/soda.png',category:"Bebidas" },
    { title: 'Postres', description: '¡Acompáñalo con un postre!', imageUrl: '/assets/imagenes/postre.png',category:"Postres" }
  ];
}
