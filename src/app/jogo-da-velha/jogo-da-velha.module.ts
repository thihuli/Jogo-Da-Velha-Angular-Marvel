import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared';
//import { MarvelAPIComponent } from './marvel-api'



@NgModule({
  declarations: [
    JogoDaVelhaComponent
    

  ],
  exports: [
    JogoDaVelhaComponent
    
    
  ],
  imports: [
    CommonModule
  ],
  providers: [
    JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
