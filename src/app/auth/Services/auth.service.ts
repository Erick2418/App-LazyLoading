import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cliente } from 'src/app/clientes/Interface/Cliente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  Url= 'http://localhost:8080/api/';
  login(cliente:Cliente){
    return this.http.post(this.Url+"login",cliente);
  }
  loggedIn():boolean{
    return !!localStorage.getItem('token');

  }
}
