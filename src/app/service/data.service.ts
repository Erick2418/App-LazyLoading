import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  nombreUsuario$= new EventEmitter<string>();
  constructor() { }
}
