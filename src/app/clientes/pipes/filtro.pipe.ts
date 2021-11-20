import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../Interface/Cliente';

@Pipe({
  name: 'filtro' // con esto lo invocamos
})
export class FiltroPipe implements PipeTransform {

  //            ES LO QUE SE RECIBE, LOS ARGUMENTOS : LO QUE RETORNA
  transform(clientes: Cliente[], page:number=0, search:string=''): Cliente[] {
    if(search.length===0){
      return clientes.slice(page,page+4);
    }
    const filteredClientes = clientes.filter( cliente=> cliente.nombre.includes(search));

    return filteredClientes.slice(page,page+4);
  }

}
