import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes:Routes=[
  {
    path:"",//esta ruta es definida en el app-routing-controller principal
    children:[
      { path:'forgot', component: ForgotComponent },
      { path:'login', component: LoginComponent },
      { path:'registro', component: RegistroComponent },
      { path:'**', redirectTo:'login' }, // cualquier otro path llama a logincomponente
      
      
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes ),
    CommonModule
  ]
})
export class AuthRoutingModule { }
