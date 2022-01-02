import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.scss']
})
export class GameAreaComponent implements OnInit {

  currentScreen: string = 'battle-screen';

  constructor() { }

  ngOnInit(): void {
    
  }

}
