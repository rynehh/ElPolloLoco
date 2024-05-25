import { Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
productos:Producto[]=[
  new Producto(1,'Un Pollo Loco',
  '8 piezas, incluye salsas, totopos y tortillas',
  312,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/06/pl-polloentero.png'
  ),
  new Producto(2,'Medio Pollo Loco',
  '4 piezas, incluye salsas, totopos y tortillas',
  162,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/06/pl-mediopollo.png'
  ),
  new Producto(3,'Cuarto de Pollo Loco',
  '2 piezas, incluye salsas, totopos y tortillas',
  99,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/06/pl-cuartopollo.png'
  ),
  new Producto(4,'Combo Individual 2 Pz',
  '2 piezas de pollo, 2 complementos, incluye salsas, totopos y tortillas',
  209,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/06/2.png'
  ),
  new Producto(5,'Combo Individual 3 Pz',
  '3 piezas de pollo, 2 complementos, incluye salsas, totopos y tortillas',
  257,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/06/3.png'
  ),
  new Producto(6,'Combo Familiar 8 Pz',
  '8 piezas de pollo, 2 complementos, incluye salsas, totopos y tortillas',
  367,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/06/8.png'
  ),
  new Producto(7,'Combo Familiar 12 Pz',
  '12 piezas de pollo, 4 complementos, incluye salsas, totopos y tortillas',
  573,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2022/03/12.png'
  ),
  new Producto(8,'Combo Familiar 16 Pz',
  '16 piezas de pollo, 6 complementos, incluye salsas, totopos y tortillas',
  573,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2022/03/16-1.png'
  ),
  new Producto(9,'Papas a la Francesa',
  'Orden personal de papas a la francesa',
  44,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/08/papas.png'
  ),
  new Producto(10,'Ensalada de Codito',
  'Orden personal de ensalada de codito',
  44,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/08/coditoss.png'
  ),
  new Producto(11,'Arroz',
  'Orden personal de arroz',
  44,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/08/arroz.png'
  ),
  new Producto(12,'Ensalada de Col',
  'Orden personal de ensalda de col',
  44,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/08/col.png'
  ),
  new Producto(13,'Frijoles a la Charra',
  'Orden personal de frijoles a la charra',
  44,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/08/frijoles.png'
  ),
  new Producto(14,'Jamaica',
  'Agua de jamaica 600ml',
  30,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/07/PL-jamaica-2.png'
  ),
  new Producto(15,'Coca Cola Original 600 ml',
  'Coca cola original 600 ml',
  30,
  1,
  'https://grupodjes.com/wp-content/uploads/2022/11/coca_600_ml-removebg-preview.png'
  ),
  new Producto(16,'Coca Cola Original 2.5 L',
  'Coca cola original 2.5 L',
  80,
  1,
  'https://grupoelvalor.com/wp-content/uploads/2018/12/coca-cola-2.5.png'
  ),
  new Producto(17,'Pay de Fresa',
  'Rebanada de pay de fresa',
  50,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/07/pay-fresa.png'
  ),
  new Producto(18,'Tu Ultimo Pedido',
  'El pedido mas recientemente realizado',
  0,
  1,
  'https://www.elpolloloco.com.mx/wp-content/uploads/2021/06/pl-polloentero.png'
  ),
]
  constructor() { }
  
  getProduct(id:number){
    return this.productos.find(producto=>
      producto.id===id);
  }
  getProductos(){
    return this.productos;
  } 



}
 