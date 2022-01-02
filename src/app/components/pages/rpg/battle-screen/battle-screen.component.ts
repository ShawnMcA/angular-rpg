import { Component, OnInit } from '@angular/core';
import { GameplayService } from 'src/app/components/shared/services/gameplay.service';

@Component({
  selector: 'app-battle-screen',
  templateUrl: './battle-screen.component.html',
  styleUrls: ['./battle-screen.component.scss']
})
export class BattleScreenComponent implements OnInit {

  currentPhase: string = 'player-action-selection';

  constructor(private gameplayService: GameplayService) { }

  async handleActionSubmit(action: string) {
    switch(action) {
      case 'fight':
        this.currentPhase = 'player-fight-selection';
        break;
      case 'item':
        this.currentPhase = 'player-item-selection';
        break;
      case 'run':
        this.currentPhase = 'player-run-selection';
        break;
    }
  }

  handleFightActionSubmit(action: string) {
    setTimeout(() => {
      switch(action) {
        case 'attack-1':
          this.currentPhase = 'player-action-selection';
          alert('Attacking with attack 1');
          break;
        case 'attack-2':
          this.currentPhase = 'player-action-selection';
          alert('Attacking with attack 2');
          break;
      }
    }, 1000);
  }

  handleItemActionSubmit(action: string) {
    setTimeout(() => {
      switch(action) {
        case 'item-1':
          this.currentPhase = 'player-action-selection';
          alert('Selecting Item 1');
          break;
        case 'item-2':
          this.currentPhase = 'player-action-selection';
          alert('Selecting Item 2');
          break;
      }
    }, 1000);
  }

  handleRunActionSubmit(action: string) {
    switch(action) {
      case 'yes':
        setTimeout(() => {
          this.currentPhase = 'player-action-selection';
          alert('Player running...');
        }, 1000);
        break;
      case 'no':
        this.currentPhase = 'player-action-selection';
        break;
    } 
  }

  ngOnInit(): void {
  }

}
