import { Injectable, OnInit } from '@angular/core';
import { GetMethods } from '@methods/methods';
import { environment } from 'src/enviroments/enviroment.development';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GameService{


  private pokemonIds: number[] = [];
  public pokemonList: any[] = [];


  constructor(private _api: ApiService) { }


  loadFirstGen(){

    for (let i = 1; i <= 151; i++) {
      this.pokemonIds.push(i);
    }

    this.pokemonIds= this.pokemonIds.sort(() => Math.random() - 0.5);
  }


  getPokemonInfo(array:number[]){
    this.pokemonList=[];

    for (const id of array) {
      const URL = `${environment.ss + GetMethods.GET_POKE + id}`;
      this._api.apiGetMethod(URL).subscribe({
        next:(data:any)=>{
          
          let poke = {
            'id': data.id,
            'name': data.name,
            'img': data.sprites.other.dream_world.front_default
          }

          this.pokemonList.push(poke);
        },
        error:(error:any)=>{
          console.log('Error', error);
        }
      });
    }
  }

  generateOptions(){
    this.getPokemonInfo(this.pokemonIds.splice(0,4));
    console.log(this.pokemonList)
    this.pokemonIds = [];
  }

  
}
