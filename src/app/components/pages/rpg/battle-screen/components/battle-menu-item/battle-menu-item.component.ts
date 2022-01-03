import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Consumable } from 'src/app/components/shared/interfaces/consumable';

@Component({
  selector: 'app-battle-menu-item',
  templateUrl: './battle-menu-item.component.html',
  styleUrls: ['./battle-menu-item.component.scss']
})
export class BattleMenuItemComponent implements OnInit {
  @Output() buttonClick = new EventEmitter<number>();
  @Input('playerConsumables') playerConsumables!: Consumable[];

  constructor() { }

  submitAction(action: number) {
    this.buttonClick.emit(action);
  }
  
  ngOnInit(): void {
  }

}
