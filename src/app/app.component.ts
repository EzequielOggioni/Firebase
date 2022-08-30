import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from './Entidades/mensaje';
import { StorageService } from './servicio/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  
  title = 'Firestore';

  public textoMensaje: string = "";
  public coleccion: Array<Mensaje> = new Array<Mensaje>();
  public coleccionAsync: Observable<Array<Mensaje>>;

  constructor(public firestoreApp: StorageService) {
    firestoreApp.traerColeccion().subscribe(t => {
      this.coleccion = [];
      (<Array<Mensaje>>t).forEach(element =>
        this.coleccion.push(element)) 
    });
    
    this.coleccionAsync = this.firestoreApp.traerColeccion();

  }
  Agregar() {
    let mensajeAPasar: Mensaje = new Mensaje();
    mensajeAPasar.texto = this.textoMensaje;
    mensajeAPasar.usuario = "Ezequiel";
    this.firestoreApp.setItem(mensajeAPasar);

  }

}


class TestA {
  public a: string = '';

}