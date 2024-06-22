import { Component, Input } from '@angular/core';
import { GameService } from '@services/game-service.service';

@Component({
  selector: 'app-game-picture',
  templateUrl: './game-picture.component.html',
  styleUrls: ['./game-picture.component.scss']
})
export class GamePictureComponent {


  @Input() game:GameService;

  
  constructor(){
    
  }

}
