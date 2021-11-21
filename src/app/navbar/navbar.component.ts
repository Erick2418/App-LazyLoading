import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName:string="";
  
  constructor(private router:Router, private dataservice:DataService) { }
  ngOnInit() {
    this.dataservice.nombreUsuario$.subscribe(
      texto=>{
        this.userName=texto;
        console.log(texto);
      }
    )
  }
  logout(){
    if(localStorage.getItem('token')){

      localStorage.removeItem('token');
      this.router.navigate(["auth/login"]);
      Swal.fire({
        icon: 'success',
        title: 'Session Terminada'
      })

    }
  }
  login(){
    if(!localStorage.getItem('token')){
      this.router.navigate(["clientes/listado"]);
      return ;
    }
  }
}
