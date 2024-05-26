import { Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos:Producto[]=[
  new Producto(1,'Un Pollo Loco',
  '8 piezas, incluye salsas, totopos y tortillas.',
  312,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/06/pl-polloentero.png',
  "Pollo"
  ),
  new Producto(2,'Medio Pollo Loco',
  '4 piezas, incluye salsas, totopos y tortillas.',
  162,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/06/pl-mediopollo.png',
  "Pollo"
  ),
  new Producto(3,'Cuarto de Pollo Loco',
  '2 piezas, incluye salsas, totopos y tortillas.',
  99,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/06/pl-cuartopollo.png',
  "Pollo"
  ),
  new Producto(4,'Combo Individual 2 Pz',
  '2 piezas de pollo, 2 complementos, incluyendo salsas, totopos y tortillas.',
  209,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/06/2.png',
  "Combos"
  ),
  new Producto(5,'Combo Individual 3 Pz',
  '3 piezas de pollo, 2 complementos, incluyendo salsas, totopos y tortillas.',
  257,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/06/3.png',
  "Combos"
  ),
  new Producto(6,'Combo Familiar 8 Pz',
  '8 piezas de pollo, 2 complementos, incluyendo salsas, totopos y tortillas.',
  367,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/06/8.png',
  "Combos"
  ),
  new Producto(7,'Combo Familiar 12 Pz',
  '12 piezas de pollo, 4 complementos, incluyendo salsas, totopos y tortillas.',
  573,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2022/03/12.png',
  "Combos"
  ),
  new Producto(8,'Combo Familiar 16 Pz',
  '16 piezas de pollo, 6 complementos, incluyendo salsas, totopos y tortillas.',
  775,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2022/03/16-1.png',
  "Combos"
  ),
  new Producto(9,'Papas a la Francesa',
  'Orden personal de papas a la francesa.',
  44,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/08/papas.png',
  "Complementos"
  ),
  new Producto(10,'Ensalada de Coditos',
  'Orden personal de ensalada de coditos.',
  44,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/08/coditoss.png',
  "Complementos"
  ),
  new Producto(11,'Arroz',
  'Orden personal de arroz.',
  44,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/08/arroz.png',
  "Complementos"
  ),
  new Producto(12,'Ensalada de Col',
  'Orden personal de ensalda de col.',
  44,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/08/col.png',
  "Complementos"
  ),
  new Producto(13,'Frijoles a la Charra',
  'Orden personal de frijoles a la charra.',
  44,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/08/frijoles.png',
  "Complementos"
  ),
  new Producto(14,'Agua de Jamaica',
  'Agua de jamaica de 600ml.',
  30,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/07/PL-jamaica-2.png',
  "Bebidas"
  ),
  new Producto(15,'Coca Cola Original 600 ml',
  'Coca cola original de 600 ml.',
  30,
  1,
  'https://grupodjes.com/wp-content/uploads/2022/11/coca_600_ml-removebg-preview.png',
  "Bebidas"
  ),
  new Producto(16,'Coca Cola Original 2.5 L',
  'Coca cola original de 2.5 L.',
  80,
  1,
  'https://grupoelvalor.com/wp-content/uploads/2018/12/coca-cola-2.5.png',
  "Bebidas"
  ),
  new Producto(17,'Pay de Fresa',
  'Una rebanada de pay de fresa.',
  50,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/07/pay-fresa.png',
  "Postres"
  ),
  new Producto(18,'Último Pedido',
  'El pedido realizado más recientemente.',
  0,
  1,
  '/assets/imagenes/bolsa.png',
  "UP"
  ),
]

  getProduct(id:number){
    return this.productos.find(producto=>
      producto.id===id);
  }
  getProductos(){
    return this.productos;
  } 



}
 