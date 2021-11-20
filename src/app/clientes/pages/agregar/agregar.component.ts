import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ClientesService } from '../../Services/clientes.service';
import {Cliente} from './../../Interface/Cliente'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit {

  form: FormGroup;
  formBuilder= new FormBuilder();
  disablebtn:boolean=false;
  constructor( private service: ClientesService  ) { 


    this.form = this.formBuilder.group({
      cedula: ['0978716710', [Validators.required,Validators.minLength(10),Validators.maxLength(10) ] ],
      correo: ['example@gmail.com', [Validators.required,Validators.email ] ],
      password: ['123456', [Validators.required,Validators.minLength(5) ] ],
      pais: ['Ecuador', [Validators.required,Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ \s]+') ] ],
      nombre: ['Example', [Validators.required,Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ \s]+') ] ],
      apellidos: ['Example', [Validators.required,Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ \s]+') ] ],
      direccion: ['Guayaquil', [Validators.required ] ],
      telefono: ['0978716710', [Validators.required,Validators.pattern('[0-9-]+[^. ,]') ] ], //permite numeros del 0 a 9 incluido - 
      obserbaciones: ['Es un cliente de ejemplo', [Validators.required,Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ \s]+[^*<>=-]') ] ], // no acepta caracteres especiales pero si tildes
      status: [true, [Validators.required] ],
    });
  }


   
  ngOnInit(): void {
  }

  save(event: Event) {
    this.disablebtn=true;
    event.preventDefault();

    if (this.form.valid) {
      let cliente:Cliente = this.form.value;
       this.service.addCliente(cliente).subscribe(data=>{
        
         console.log(JSON.stringify(data));
         Swal.fire({
          icon: 'success',
          title: 'Registro con exito'
        })
         this.disablebtn=false;
       },error=>{
         let msg:string= error?.error.data;
         msg = (msg==="EMAIL EXIST") ? msg="El correo ya esta registrado, intente con otro." : "Error, reintente nuevamente";

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:  msg,
          })
          this.disablebtn=false;
       }
       )
     
    }

  }
}
