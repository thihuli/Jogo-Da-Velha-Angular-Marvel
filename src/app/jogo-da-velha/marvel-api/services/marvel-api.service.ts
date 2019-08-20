import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  PUBLIC_KEY = '4a10e90b2ec94789323e42cecb8aff49' //
  
  HASH = '46dff7ee1196312e0f1c7c81487a5d92' //
  
  URL_API = `https:gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}` 
  

  constructor(private http: HttpClient) { }

  listarComics(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results ))
  }

}
