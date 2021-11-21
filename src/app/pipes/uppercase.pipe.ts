import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from '../productos/interface/IProduct';

@Pipe({
  name: 'uppercasepipe'
})
export class UppercasePipe implements PipeTransform {

  transform( productos: IProducts[], ...args: IProducts[]): IProducts[] {
     

    let productosUp = productos.filter( producto=> {
        producto.nombre= producto.nombre[0].toUpperCase() + producto.nombre.slice(1);
        producto.descripcion= producto.descripcion[0].toUpperCase() + producto.descripcion.slice(1);   
        return producto; 
      }
    );
    
    return productosUp;
  }

}
