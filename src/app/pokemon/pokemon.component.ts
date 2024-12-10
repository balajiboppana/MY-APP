import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  pokemons:any=[];
  constructor(private pokemanservice:PokemonService){
    pokemanservice.getPokemons().subscribe(
      (data:any)=>{
        this.pokemons=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
}
