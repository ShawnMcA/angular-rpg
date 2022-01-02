import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-battle-menu-fight',
  templateUrl: './battle-menu-fight.component.html',
  styleUrls: ['./battle-menu-fight.component.scss']
})
export class BattleMenuFightComponent implements OnInit {
  @Output() buttonClick = new EventEmitter<string>();

  constructor() { }

  submitAction(action: string) {
    this.buttonClick.emit(action);
  }

  ngOnInit(): void {
  }

}
