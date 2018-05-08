import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpreendimentosComponent } from './empreendimentos/empreendimentos.component';
import { ConstrucoesComponent } from './construcoes/construcoes.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
