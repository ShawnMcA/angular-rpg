import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-battle-menu-item',
  templateUrl: './battle-menu-item.component.html',
  styleUrls: ['./battle-menu-item.component.scss']
})
export class BattleMenuItemComponent implements OnInit {
  @Output() buttonClick = new EventEmitter<string>();

  constructor() { }

  submitAction(action: string) {
    this.buttonClick.emit(action);
  }
  
  ngOnInit(): void {
  }

}
