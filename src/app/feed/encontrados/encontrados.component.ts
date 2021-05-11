import { PetPerdidoService } from './../../serviço/pet-perdido.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pet } from 'src/app/usuario/pet.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-encontrados',
  templateUrl: './encontrados.component.html',
  styleUrls: ['./encontrados.component.css']
})
export class EncontradosComponent implements OnInit {
  pet: Pet = {};
  mostrarForm : boolean = false;

  constructor(
    public petPerdidoService: PetPerdidoService,
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
      await this.petPerdidoService.createPet(this.pet);
      {this.router.navigate(['/encontrados'])}
    } catch(err){
      console.error(err);    
    }
}
mostrar(){
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


}