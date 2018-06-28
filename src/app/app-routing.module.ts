import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpreendimentosComponent } from './empreendimentos/empreendimentos.component';
import { ConstrucoesComponent } from './construcoes/construcoes.component';
import { LoginComponent } from './login/login.component';
import { LockAreaComponent } from './lock-area/lock-area.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'empreendimentos',
    component: EmpreendimentosComponent
  },
  {
    path: 'construcoes',
    component: ConstrucoesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: LockAreaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
