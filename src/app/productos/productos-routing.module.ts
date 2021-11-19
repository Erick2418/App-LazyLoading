import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path:'agregar', component: AgregarComponent},
      { path:'listado', component: ListadoComponent},
      { path:'producto', component: ProductoComponent},
      { path:'editar', component: EditarComponent},
      { path:'**', redirectTo:'listado'},
  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
