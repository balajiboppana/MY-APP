import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  pokemon:any=[];
  constructor(private _pokemonService:PokemonService){
    _pokemonService.getpokemon().subscribe(
      (data:any)=>{
        this.pokemon=data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
}
