import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from './services'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-marvel-api', 
  templateUrl: './marvel-api.component.html',
  styleUrls: ['./marvel-api.component.css']
})
export class MarvelAPIComponent implements OnInit {

  constructor(private apiservice: MarvelApiService) { }
    allCharacters: Observable<any>
 

  ngOnInit() {
    this.getCharacters()
  }

  getCharacters() {
    this.allCharacters = this.apiservice.listarComics()
  }

}
