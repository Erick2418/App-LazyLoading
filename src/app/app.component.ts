import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'applazyloadform';

  constructor(private router: Router){

  }

  ngOnInit(): void {
    this.login();
  }
  logout(){
    localStorage.removeItem('token');
    Swal.fire({
      icon: 'success',
      title: 'Session Terminada'
    })
  }
  login(){
    
    if(localStorage.getItem('token')){
      Swal.fire({
        icon: 'success',
        title: 'Ya existe una session'
      })
      this.router.navigate(["clientes/listado"]);
      return ;
    }
    this.router.navigate(["/auth/login"]);
    return;
  }
}
