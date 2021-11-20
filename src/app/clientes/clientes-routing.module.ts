import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardian } from '../auth/login-guardian.service';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'agregar',canActivate:[LoginGuardian],component:AgregarComponent },
      { path:'listado', component: ListadoComponent },
      { path:'cliente', component: ClienteComponent },
      { path:'**', redirectTo:'listado' },
      
      
            
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
