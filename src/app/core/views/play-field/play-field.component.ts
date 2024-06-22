import { Component, Injector, OnInit } from '@angular/core';
import { GameService } from '@services/game-service.service';
import { GamePictureComponent } from '../../layouts/game-picture/game-picture.component';

@Component({
  selector: 'app-play-field',
  templateUrl: './play-field.component.html',
  styleUrls: ['./play-field.component.scss']
})
export class PlayFieldComponent implements OnInit {

  id:string;

  constructor(public _game: GameService) { 
  }

  ngOnInit() {
    this._game.startGame();
  } 

}
