import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import {HttpClientModule} from '@angular/common/http'; //ESTO
import { ClientesService } from './Services/clientes.service';

@NgModule({
  declarations: [
    AgregarComponent,
    ListadoComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    HttpClientModule  //ESTO
  ],
  providers: [ClientesService], //ESTO
})
export class ClientesModule { }
