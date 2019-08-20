import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarvelAPIComponent } from './jogo-da-velha/marvel-api'
import { JogoDaVelhaComponent } from './jogo-da-velha'



const routes: Routes = [{
  path: '', redirectTo: '/characters', pathMatch: 'full'
},
{
  path: 'characters', component: MarvelAPIComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
