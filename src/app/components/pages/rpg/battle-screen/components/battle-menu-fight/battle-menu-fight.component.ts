import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PlayerAttack } from 'src/app/components/shared/interfaces/player-attack';

@Component({
  selector: 'app-battle-menu-fight',
  templateUrl: './battle-menu-fight.component.html',
  styleUrls: ['./battle-menu-fight.component.scss']
})
export class BattleMenuFightComponent implements OnInit {
  @Output() buttonClick = new EventEmitter<number>();
  @Input() playerAttacks!: PlayerAttack[];

  constructor() { }

  submitAction(action: number) {
    this.buttonClick.emit(action);
  }

  ngOnInit(): void {
  }

}
