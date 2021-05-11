import { AuthService } from './../../serviço/auth.service';
import { User } from './../../usuario/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent implements OnInit {
  userLogin : User = {};

  constructor(
    public login: AuthService,
    public router : Router,
    public afAuth : AngularFireAuth,
  ) { }

  ngOnInit():void {    
  }

  recuperarsenha(){
    try { 
       this.afAuth.sendPasswordResetEmail(this.userLogin.email!).then((success) =>{
        alert("O e-mail de recuperação de senha foi enviado!");
       });
    } catch (error) { 
      console.error(error); 
    }
  }

}