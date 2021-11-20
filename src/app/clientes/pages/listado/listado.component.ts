import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Cliente } from '../../Interface/Cliente';
import { ClientesService } from '../../Services/clientes.service';
 
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public clientes:Cliente[]=[];
  public page:number=0;
  constructor(private service:ClientesService) { }

  ngOnInit(): void {
    this.service.getPersonas()
    .subscribe(data=>{
        this.clientes=data;
        
    })
  }

  nextPage(){
    this.page += 5;
  }
  previewPage(){

    if(this.page >0){
      this.page-=5;
    }

  }

}
