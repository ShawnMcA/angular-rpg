import { Component, OnInit } from '@angular/core';
import { ScreenData } from '../../shared/interfaces/screen-data';
import { ScreenStateService } from '../../shared/services/screen-state.service';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.scss']
})
export class GameAreaComponent implements OnInit {

  screenData: ScreenData[] = [];
  currentScreen!: ScreenData;

  constructor(private screenStateService: ScreenStateService) {  }
  
  private _setInitialScreenData() {
    this.screenStateService.getScreenData()
      .subscribe((data: any) => {
        
        data.forEach((s: any) => this.screenData.push({
          id: s.pkScreenId,
          screenName: s.screenName
        }));

        this.currentScreen = this.screenData[0];
      });
  }

  ngOnInit(): void {
    this._setInitialScreenData();
  }

  ngAftertViewInit(): void {
    
  }

}
