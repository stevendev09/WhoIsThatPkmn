import { Component, Input } from '@angular/core';
import { GameService } from '@services/game-service.service';

@Component({
  selector: 'app-game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['./game-options.component.scss']
})
export class GameOptionsComponent {


  @Input() betslipService:GameService;

  
  constructor(private game:GameService){
    
  }


}
