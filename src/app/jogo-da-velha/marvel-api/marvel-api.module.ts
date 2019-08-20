import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelAPIComponent } from './marvel-api.component'
import { MarvelApiService } from  './services'



@NgModule({
  declarations: [
    MarvelAPIComponent
  ],
  exports: [
    
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MarvelApiService
  ]
})
export class MarvelAPIModule { }
