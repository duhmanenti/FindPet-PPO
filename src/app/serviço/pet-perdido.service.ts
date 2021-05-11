import { Pet } from './../usuario/pet.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PetPerdidoService {
  petCollection: AngularFirestoreCollection<Pet>;

  constructor(private  afs: AngularFirestore) {
    this.petCollection = afs.collection('Pets Perdidos');
  }

  getPetDoc(id:string) {
    return this.afs.collection('Pets Perdidos').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Pet;
          const id = a.payload.doc.id;
  
          return { id, ...data};
        })
      })
    );
  }

  createPet(pet: Pet) {
    const petRef = this.afs.collection('Pets Perdidos');
    petRef.doc(pet.id).set(pet);
  }

  deletePet(pet: Pet) {
    const petRef = this.afs.collection('Pets Perdidos');
    petRef.doc(pet.id).delete();
  }
  
  updatePet(pet: Pet, id: string) {
    const petRef = this.afs.collection('Pets Perdidos');
    petRef.doc(id).update(pet);
    }
}