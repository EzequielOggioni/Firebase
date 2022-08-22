import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { addDoc } from '@angular/fire/firestore';
import { collection, Firestore, getDoc, getDocs, setDoc} from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  setItem() {
    var juegos  = this.firestore.collection('Juegos');
    juegos.add({a:'ddd'});
  }

  constructor(public firestore : AngularFirestore) { 
  }

  traerColeccion():Observable<any> {
      var juegos  = this.firestore.collection('Juegos');
      return juegos.valueChanges();

  }

}
