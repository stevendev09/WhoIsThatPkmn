import { Component, Injector, OnInit } from '@angular/core';
import { GameService } from '@services/game-service.service';

@Component({
  selector: 'app-play-field',
  templateUrl: './play-field.component.html',
  styleUrls: ['./play-field.component.scss']
})
export class PlayFieldComponent implements OnInit {

  id:string;

  constructor(private _game: GameService) { 
  }



  ngOnInit() {
    this._game.loadFirstGen();
    this._game.generateOptions();
  } 

}
