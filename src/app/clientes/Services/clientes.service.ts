import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Cliente } from '../Interface/Cliente';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  constructor(private http:HttpClient) { }

  Url= 'http://localhost:8080/api/clientes';
  getPersonas():Observable<Cliente[]> { 
    return this.http.get<Cliente[]>(this.Url);
  }
}
