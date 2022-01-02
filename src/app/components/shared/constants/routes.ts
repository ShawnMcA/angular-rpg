import { Routes } from "@angular/router";
import { GameAreaComponent } from "../../pages/game-area/game-area.component";
import { MainMenuComponent } from "../../pages/main-menu/main-menu.component";
import { BattleScreenComponent } from "../../pages/rpg/battle-screen/battle-screen.component";

export const routes: Routes = [
  { 
    path: '', 
    component: MainMenuComponent 
  },
  { 
    path: 'rpg', 
    component: GameAreaComponent,
    children: [
      {
        path: 'battle-screen',
        component: BattleScreenComponent
      }
    ] 
  }
];