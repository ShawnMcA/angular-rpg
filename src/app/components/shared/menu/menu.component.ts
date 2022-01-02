import { Component, Input, OnInit } from '@angular/core';
import { MenuButton } from '../interfaces/menu-button';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input('menuItems') menuItems : MenuButton[] = []; 
  @Input('textColor') textColor : string = 'btn-text-black'; 

  constructor() { }

  ngOnInit(): void {
  }

}
