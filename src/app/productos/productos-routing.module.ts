import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardian } from '../auth/login-guardian.service';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path:'agregar',canActivate:[LoginGuardian], component: AgregarComponent},
      { path:'listado',canActivate:[LoginGuardian], component: ListadoComponent},
      { path:'producto',canActivate:[LoginGuardian], component: ProductoComponent},
      { path:'editar/:id',canActivate:[LoginGuardian], component: EditarComponent},
      { path:'**', redirectTo:'listado'},
  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
