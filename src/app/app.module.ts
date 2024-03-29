// Misc imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Component imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameAreaComponent } from './components/pages/game-area/game-area.component';
import { MainMenuComponent } from './components/pages/main-menu/main-menu.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { BattleScreenComponent } from './components/pages/rpg/battle-screen/battle-screen.component';
import { BattleMenuActionSelectionComponent } from './components/pages/rpg/battle-screen/components/battle-menu-action-selection/battle-menu-action-selection.component';
import { BattleMenuFightComponent } from './components/pages/rpg/battle-screen/components/battle-menu-fight/battle-menu-fight.component';
import { BattleMenuItemComponent } from './components/pages/rpg/battle-screen/components/battle-menu-item/battle-menu-item.component';
import { BattleMenuRunComponent } from './components/pages/rpg/battle-screen/components/battle-menu-run/battle-menu-run.component';
import { BattlePlayerContainerComponent } from './components/pages/rpg/battle-screen/components/battle-player-container/battle-player-container.component';
import { BattleEnemyContainerComponent } from './components/pages/rpg/battle-screen/components/battle-enemy-container/battle-enemy-container.component';

@NgModule({
  declarations: [
    AppComponent,
    GameAreaComponent,
    MainMenuComponent,
    MenuComponent,
    BattleScreenComponent,
    BattleMenuActionSelectionComponent,
    BattleMenuFightComponent,
    BattleMenuItemComponent,
    BattleMenuRunComponent,
    BattlePlayerContainerComponent,
    BattleEnemyContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
