import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import {HttpClientModule} from '@angular/common/http'; //ESTO
import { ClientesService } from './Services/clientes.service';
import { FiltroPipe } from './pipes/filtro.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LoginGuardian} from './../auth/login-guardian.service'
import { AuthService } from '../auth/Services/auth.service';
@NgModule({
  declarations: [
    AgregarComponent,
    ListadoComponent,
    ClienteComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    HttpClientModule,  //ESTO
    FormsModule,
    ReactiveFormsModule //para los forms
  ],
  providers: [ClientesService,LoginGuardian,AuthService], //ESTO
})
export class ClientesModule { }
