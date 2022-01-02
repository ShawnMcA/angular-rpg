import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-battle-menu-run',
  templateUrl: './battle-menu-run.component.html',
  styleUrls: ['./battle-menu-run.component.scss']
})
export class BattleMenuRunComponent implements OnInit {
  @Output() buttonClick = new EventEmitter<string>();

  constructor() { }

  submitAction(action: string) {
    this.buttonClick.emit(action);
  }
  
  ngOnInit(): void {
  }

}
