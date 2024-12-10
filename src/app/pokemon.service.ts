import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private _http: HttpClient) {}
  apiUrl:string ='https://dummyapi.online/api/pokemon';
  // Fetching the list of Pokemons from the API
  getPokemons(): Observable<any> {
    return this._http.get(this.apiUrl);
  }
}
