import { User } from './../usuario/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuariosCollection:AngularFirestoreCollection<User>;


  constructor(private afAuth:AngularFireAuth, public afs: AngularFirestore) {
    this.usuariosCollection = this.afs.collection<User>('Usuarios');
   }

  login(user:User){
    return this.afAuth.signInWithEmailAndPassword(user.email!,user.senha!)

  }
  cadastro(user:User){
    return this.afAuth.createUserWithEmailAndPassword(user.email!, user.senha!);

  }
  sair(){
    return this.afAuth.signOut();
  }
  recuperarsenha(user : User){
    return this.afAuth.sendPasswordResetEmail(user.email!);
  }

  getAuth(){
    return this.afAuth.currentUser;
 }

  isAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }
}