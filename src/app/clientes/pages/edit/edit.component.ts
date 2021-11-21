import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientesService } from '../../Services/clientes.service';
import {Cliente} from './../../Interface/Cliente'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  index:number=0;
  form: FormGroup;
  formBuilder= new FormBuilder();
  disablebtn:boolean=false;
  cliente!: Cliente;
  isDisabled:boolean=false;

  constructor(private router:Router, private route:ActivatedRoute,private service: ClientesService) {

    this.form = this.formBuilder.group({
      cedula: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10) ] ],
      correo: ['', [Validators.required,Validators.email ] ],
      password: ['', [Validators.required,Validators.minLength(5) ] ],
      pais: ['', [Validators.required,Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ \s]+') ] ],
      nombre: ['', [Validators.required,Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ \s]+') ] ],
      apellidos: ['', [Validators.required,Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ \s]+') ] ],
      direccion: ['', [Validators.required ] ],
      telefono: ['', [Validators.required,Validators.pattern('[0-9-]+[^. ,]') ] ], //permite numeros del 0 a 9 incluido - 
      obserbaciones: ['', [Validators.required,Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ \s]+[^*<>=-]') ] ], // no acepta caracteres especiales pero si tildes
      status: [true, [Validators.required] ],
    });

  }

  ngOnInit(): void {

    this.index = this.route.snapshot.params['id'];
    
    if(this.index==null){
      this.router.navigate(['/clientes/listado']);
    }

    this.cargarDatos();
  }

  cargarDatos(){

      this.service.getCliente(this.index).subscribe(
        data=>{
          this.cliente = data;
          this.form.patchValue({
            cedula: this.cliente.cedula,
            correo: this.cliente.correo,
            password:this.cliente.password,
            pais: this.cliente.pais,
            nombre: this.cliente.nombre,
            apellidos: this.cliente.apellidos,
            direccion: this.cliente.direccion,
            telefono: this.cliente.telefono,
            obserbaciones: this.cliente.obserbaciones,
            status: this.cliente.status,
          })

        }
      )
  }
  
  save(event: Event) {
    this.disablebtn=true;
    event.preventDefault();
    
    this.cliente = this.form.value;
    this.cliente.id=this.index;
    this.service.updateCliente(this.cliente).subscribe(
      data=>{

        Swal.fire({
          icon: 'success',
          title: "Datos actualizados!"
        })
        this.router.navigate(['/clientes/listado']);
      },error=>{
        Swal.fire({
          icon: 'error',
          title: "Hubo un error, intente nuevamente"
        })
       
      }
    )

  }

}
