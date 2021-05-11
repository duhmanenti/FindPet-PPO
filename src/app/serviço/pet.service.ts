import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Pet } from '../usuario/pet.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  petCollection: AngularFirestoreCollection<Pet>;

  constructor(private  afs: AngularFirestore) {
    this.petCollection = afs.collection('Pets');
  }

  getPetDoc(id:string) {
    return this.afs.collection('Pets').snapshotChanges().pipe(
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
    const petRef = this.afs.collection('Pets');
    petRef.doc(pet.id).set(pet);
  }

  deletePet(pet: Pet) {
    const petRef = this.afs.collection('Pets');
    petRef.doc(pet.id).delete();
  }
  
  updatePet(pet: Pet, id: string) {
    const petRef = this.afs.collection('Pets');
    petRef.doc(id).update(pet);
    }
}