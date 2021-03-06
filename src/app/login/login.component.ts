import { AuthService } from './../serviço/auth.service';
import { User } from './../usuario/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userLogin: User = {};
  mensagemErro : string = "";
  
  constructor(
    public router: Router,
    public authService:AuthService,
    public afAuth:AngularFireAuth,
    public afs:AngularFirestore
  ) { }

  ngOnInit(): void {
  }
  async login(){
    try{
      await this.authService.login(this.userLogin).then(
        (success) => {this.router.navigate(["/perfil"])})
    }catch(error){
      switch (error.code) {
        case 'auth/wrong-password':
          this.mensagemErro = "Senha Incorreta!";
        break;
        case 'auth/user-not-found':
          this.mensagemErro = "E-mail não Cadastrado!";
        break;
        case 'auth/invalid-email':
          this.mensagemErro = "E-mail Inválido!";
        break;
      }
    }
  }

}