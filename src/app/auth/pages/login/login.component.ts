import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../Services/auth.service';
import {Cliente} from './../../Interface/Cliente'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  formBuilder= new FormBuilder();
  disablebtn:boolean=false;

  constructor( private service: AuthService, private router:Router) { 
    this.form = this.formBuilder.group({
      correo: ['example@gmail.com', [Validators.required,Validators.email ] ],
      password: ['123456', [Validators.required,Validators.minLength(5) ] ],
    });

  }

  ngOnInit(): void {
  }
  
  auth(event: Event) {
    this.disablebtn=true;
    event.preventDefault();
    if (this.form.valid) {
      const clienteData:Cliente = this.form.value;  
      this.service.login(clienteData).subscribe(data=>{
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido'
        })
        this.router.navigate(["listar"]);
      }, error=>{
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Error '
        })
      }
      )
    }

  }


}
