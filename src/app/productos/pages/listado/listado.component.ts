import { Component, OnInit } from '@angular/core';
import { IProducts } from '../../interface/IProduct';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listProducts:IProducts[];
  constructor() {

    this.listProducts=[
        { id:0, nombre:"dorito", precio:0.25, descripcion:"es un snack con sabor a queso", img:"./../../../../assets/notimg.png" },
        { id:1, nombre:"cheto", precio:0.30, descripcion:"es un snack con sabor a queso", img:"./../../../../assets/notimg.png" },
        { id:2, nombre:"tostiqueso", precio:0.15, descripcion:"es un snack pequenio", img:"./../../../../assets/notimg.png" },
        { id:3, nombre:"Kchito", precio:0.30, descripcion:"es un snack", img:"./../../../../assets/notimg.png" },
        { id:4, nombre:"detodito", precio:0.50, descripcion:"es un snack que tiene de todo", img:"./../../../../assets/notimg.png" },
        { id:5, nombre:"pringles", precio:1.25, descripcion:"es un snack", img:"./../../../../assets/notimg.png" },
        
    ]
    
   }

  ngOnInit(): void {
  }

}
