import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { AuthService } from 'src/app/auth/Services/auth.service';
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
  public search:string="";
  constructor(private service:ClientesService,public router:Router,private autservicio: AuthService ) { }

  ngOnInit(): void {
    this.service.getClientes()
    .subscribe(data=>{
        this.clientes=data;
        
    })
    this.autservicio.nombreuser$.subscribe(
      data=>{
        console.log("LISTADO: "+data);
      }
    )
  }

  nextPage(){
    this.page += 5;
  }
  previewPage(){

    if(this.page >0){
      this.page-=5;
    }

  }
  keysearchCliente( search:string){// cada que se precione una tecla se llamara esta funcion
    this.page=0;
    this.search=search;
  }
}
