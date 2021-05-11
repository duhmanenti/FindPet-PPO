import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './../serviço/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../serviço/usuario.service';
import { User } from '../usuario/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  @Input() usuario: User = {};
  userId: any = "";
  userSubscription!: Subscription;
  entrarSair?: boolean;
  servicosSubscription!: Subscription;

  constructor(
    public afs : AngularFirestore, 
     public afAuth : AngularFireAuth,
     public storage : AngularFireStorage,
     public router : Router,
     public loginService : AuthService,
     public usuarioService : UsuarioService,
     public active : ActivatedRoute
  ) {
    
   }

  ngOnInit() {
    this.getUsuario();

  }
  getUsuario(){
    this.usuarioService.getUsuario().snapshotChanges().pipe(
    )
  }
}