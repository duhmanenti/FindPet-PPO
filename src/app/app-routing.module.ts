import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EncontradosComponent } from './feed/encontrados/encontrados.component';
import { FeedComponent } from './feed/feed.component';
import { PerdidosComponent } from './feed/perdidos/perdidos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './login/recuperar-senha/recuperar-senha.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'recuperar-senha', component:RecuperarSenhaComponent},
  {path: 'sobre-nos', component:SobreNosComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'feed', component:FeedComponent},
  {path: 'perdidos', component: PerdidosComponent},
  {path: 'encontrados', component: EncontradosComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
