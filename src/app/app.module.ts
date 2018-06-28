import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmpreendimentosComponent } from './empreendimentos/empreendimentos.component';
import { ConstrucoesComponent } from './construcoes/construcoes.component';
import { LoginComponent } from './login/login.component';
import { LockAreaComponent } from './lock-area/lock-area.component';
import { LoginService } from './login/login.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpreendimentosComponent,
    ConstrucoesComponent,
    LoginComponent,
    LockAreaComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    Ng2PageScrollModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
