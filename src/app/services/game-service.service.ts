import { Injectable, OnInit } from '@angular/core';
import { GetMethods } from '@methods/methods';
import { environment } from 'src/enviroments/enviroment.development';
import { ApiService } from './api.service';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService{


  private pokemonIds: number[] = [];
  public pokemonList: any[] = [];
  public pokemonPicture: any;
  public showImage:boolean = false;
  public disabledOptions=false;
  public counter = 0;
  public wins = 0;
  public loses = 0;



  constructor(private _api: ApiService) { }


  loadFirstGen(){

    for (let i = 1; i <= 151; i++) {
      this.pokemonIds.push(i);
    }

    this.pokemonIds= this.pokemonIds.sort(() => Math.random() - 0.5);
  }


  getPokemonInfo(array:number[]){
    this.pokemonList=[];
    const URLS:string[] = [];
    for (const id of array) {
      let URL = `${environment.ss + GetMethods.GET_POKE + id}`;
      URLS.push(URL);
    }
    const requests = this._api.multipleGet(URLS);

      forkJoin(requests).subscribe({
        next:(data:any)=>{


          data.forEach(pokmn => {
            let poke = {
              'id': pokmn.id,
              'name': pokmn.name,
              'img': pokmn.sprites.other.dream_world.front_default
            }
            this.pokemonList.push(poke);
            
          });
          this.generatePicture()

        },
        error:(error:any)=>{
          console.log('Error', error);
        }
      });
  }

  generateOptions(){
    this.getPokemonInfo(this.pokemonIds.splice(0,4));
    console.log(this.pokemonList)
    this.pokemonIds = [];
  }

  generatePicture(){
    let number = Math.floor(Math.random()*4);
    this.pokemonPicture= this.pokemonList[number];
    console.log(this.pokemonPicture);
  }


  startGame(){
    this.loadFirstGen();
    this.generateOptions();
  }

  nextPokmn(){
    this.counter++;
    this.showImage = false;
    this.disabledOptions=false;
    this.startGame();
  }

  restartGame(){
    this.counter=0;
    this.wins=0;
    this.loses=0;
    this.showImage = false;
    this.disabledOptions=false;
    this.startGame();
  }
  
}
