import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmpreendimentosComponent } from './empreendimentos/empreendimentos.component';
import { ConstrucoesComponent } from './construcoes/construcoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpreendimentosComponent,
    ConstrucoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
