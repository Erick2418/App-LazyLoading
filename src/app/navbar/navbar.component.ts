import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName:string="Erick";
  constructor(private router:Router) { }

  ngOnInit(): void {
    
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
