import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import Swal from "sweetalert2";
import { AuthService } from "./Services/auth.service";
@Injectable()
export class LoginGuardian implements CanActivate{
constructor ( private autService: AuthService,
              private router:Router
                ){}
    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
            if(this.autService.loggedIn()){
                return true;
            }
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text:  "antes debes iniciar session",
              })
            this.router.navigate(['/auth/login'])
            return false;
    }


}