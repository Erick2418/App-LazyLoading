import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { EditarComponent } from './pages/editar/editar.component';
import { LoginGuardian } from '../auth/login-guardian.service';
import { AuthService } from '../auth/Services/auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AgregarComponent,
    ListadoComponent,
    ProductoComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    HttpClientModule,  //ESTO
  ],
  providers:[LoginGuardian,AuthService]
})
export class ProductosModule { }
