import { Component, OnInit } from '@angular/core';
import { MenuButton } from '../../shared/interfaces/menu-button';
import { MenuData } from '../../shared/menu/data/menu-data';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  menuItems: MenuButton[] = [];

  constructor() { 
    this.menuItems = MenuData;
  }

  ngOnInit(): void {
  }

}
