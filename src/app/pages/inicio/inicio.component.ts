import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {


  ngOnInit(): void {
    
  }

  menuSections = [
    { title: 'Pollos', description: '¡Disruta de un Pollo Loco!', imageUrl: '/assets/imagenes/pollo.png' },
    { title: 'Combos', description: '¡Los mejores combos para disfrutar!', imageUrl: '/assets/imagenes/combo.png'},
    { title: 'Complementos', description: 'Para disfrutarse con tu pollo', imageUrl: '/assets/imagenes/comp.png' },
    { title: 'Bebidas', description: 'Refrescate con las mejores bebidas', imageUrl: '/assets/imagenes/soda.png' },
    { title: 'Postres', description: '¡Acompañalo con un postre!', imageUrl: '/assets/imagenes/postre.png' }
    
];
}
