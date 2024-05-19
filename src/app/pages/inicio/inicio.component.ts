import { Component, OnInit } from '@angular/core';
import introJs from 'intro.js'; 
import $ from 'jquery'; 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css',
  ]
})
export class InicioComponent implements OnInit {

  ngOnInit(): void {

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

    $("#buttoncol").click(function(){
      $("#navbarCollapse").slideToggle("slow");
    });
  
  });
    
  
  }

  
  menuSections = [
    { title: 'Pollos', description: '¡Disfruta de un Pollo Loco!', imageUrl: '/assets/imagenes/pollo.png' },
    { title: 'Combos', description: '¡Los mejores combos para disfrutar!', imageUrl: '/assets/imagenes/combo.png' },
    { title: 'Complementos', description: 'Para disfrutarse con tu pollo', imageUrl: '/assets/imagenes/comp.png' },
    { title: 'Bebidas', description: 'Refréscate con las mejores bebidas', imageUrl: '/assets/imagenes/soda.png' },
    { title: 'Postres', description: '¡Acompáñalo con un postre!', imageUrl: '/assets/imagenes/postre.png' },
    { title: '¡Tu último pedido!', description: '¿Disfrutaste tu última comida? ¡Vuelve a ordenarla!', imageUrl: '/assets/imagenes/pollo.png' }
  ];
}
