import { User } from './../usuario/user';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public user: AngularFirestoreCollection<User>;

  constructor(public afs: AngularFirestore) {
    this.user = afs.collection('Usuarion')
 }

  agregarUsuario(user:User): Promise<any> {
    return this.afs.collection('Usuarios').add(user);

  }

  getUsuario(): AngularFirestoreCollection<User> {
    return this.user;
  }

  obterUsuario(id: string): Observable<any> {
    return this.afs.collection('Usuarios').doc(id).snapshotChanges();
  }

  eliminarUsuario(id: string): Promise<any> {
    return this.afs.collection('Usuarios').doc(id).delete();
  }

  atualizarUsuario(id: string, data: any): Promise<any> {
    return this.afs.collection('Usuarios').doc(id).update(data);
  }
}