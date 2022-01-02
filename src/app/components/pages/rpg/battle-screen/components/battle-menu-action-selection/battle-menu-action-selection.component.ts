import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-battle-menu-action-selection',
  templateUrl: './battle-menu-action-selection.component.html',
  styleUrls: ['./battle-menu-action-selection.component.scss']
})
export class BattleMenuActionSelectionComponent implements OnInit {
  @Output() buttonClick = new EventEmitter<string>();

  constructor() { }

  submitAction(action: string) {
    this.buttonClick.emit(action);
  }

  ngOnInit(): void {
  }

}
