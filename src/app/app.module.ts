import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoDaVelhaModule } from './jogo-da-velha'
import { HttpClientModule } from '@angular/common/http'
import { MarvelAPIModule } from './jogo-da-velha/marvel-api'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JogoDaVelhaModule,
    HttpClientModule,
    MarvelAPIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
