import { Component } from '@angular/core';
import { StorageService } from './servicio/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firestore';

  public coleccion:Array<string>= new Array<string>();

  constructor(public firestoreApp:StorageService ) {
   firestoreApp.traerColeccion().subscribe(t=>
    {
      this.coleccion = [];
       (<Array<any>>t).forEach(element => 
        this.coleccion.push(JSON.stringify( element)) 
       )
      
    });
    

  }
  Agregar(){
    this.firestoreApp.setItem();

  }

}


class TestA
{
  public a:string='';
  
}