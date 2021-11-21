import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'applazyloadform';
  userName:string=''; 
  constructor(){
    
  }
  
  ngOnInit(): void {
   
  

  }

  // logout(){
  //   if(localStorage.getItem('token')){

  //     localStorage.removeItem('token');
  //     this.router.navigate(["auth/login"]);
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Session Terminada'
  //     })

  //   }
  // }
  // login(){
  //   if(!localStorage.getItem('token')){
  //     this.router.navigate(["clientes/listado"]);
  //     return ;
  //   }
  // }
  
}
