import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
// interface HTMLInputEvent extends Event {
//   target: HTMLInputElement & EventTarget;
// }

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  file!:File;

  photoSelected!: string | ArrayBuffer |null;

  imgB64Text:string="";
  myImgesB64!:File;

  constructor() { }

  ngOnInit(): void {
  }

  onChange = (event: Event) => {
    const target= event.target as HTMLInputElement;
    this.file = (target.files as FileList)[0];
    console.log(this.file);

    this.showImgPreview(); // mostrar apenas se selecciona en el imput de img.
    this.convertToBase64(); //la conversion

  };

  showImgPreview(){
      const reader = new FileReader();
      reader.onload =  e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
  }

  convertToBase64(){
    
      const observable = new Observable( 
        (subscriber:Subscriber<any>)=>{
          this.readFile(subscriber);
        }
      )

      observable.subscribe( 
        (d)=>{
          console.log(d);
          
          this.imgB64Text=d;
          
          this.myImgesB64  =d; 

        }
       )

  }

  readFile(subscriber:Subscriber<any> ){
    const fileReader = new FileReader();
    fileReader.onload =  e => this.photoSelected = fileReader.result;
    fileReader.readAsDataURL(this.file);
    fileReader.onload = ()=>{
      subscriber.next(fileReader.result);
      subscriber.complete();
    };
    fileReader.onerror = (error)=>{
      subscriber.error(error);
      subscriber.complete();
    }



  }
  
   
}
