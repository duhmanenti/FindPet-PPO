import { Router } from '@angular/router';
import { PetService } from './../../serviço/pet.service';
import { Pet } from './../../usuario/pet.model';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-perdidos',
  templateUrl: './perdidos.component.html',
  styleUrls: ['./perdidos.component.css']
})
export class PerdidosComponent implements OnInit {

  pet: Pet = {};
  mostrarForm : boolean = false;

  constructor(
    public petService: PetService,
    public router: Router,
    public afs: AngularFirestore
  ) {}

  ngOnInit(): void {
  }
  mostrarFormulario(){
    this.mostrarForm = !this.mostrarForm;
  }

  async postar(){
    try{
      await this.petService.createPet(this.pet);
      {this.router.navigate(['/perdidos'])}
    } catch(err){
      console.error(err);    
    }
}
mostrar(){
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


}