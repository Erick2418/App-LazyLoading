import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'agregar', component:AgregarComponent },
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
