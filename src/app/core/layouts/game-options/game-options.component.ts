import { Component, Input } from '@angular/core';
import { GameService } from '@services/game-service.service';

@Component({
  selector: 'app-game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['./game-options.component.scss']
})
export class GameOptionsComponent {


  @Input() game:GameService;

  
  constructor(){
    
  }

  selectOption(option){
    if(option.id == this.game.pokemonPicture.id){
      this.game.showImage=true;
    }else{
      console.log("lose");
    }
  }


}
