import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item.interface';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'base-application',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Power Mapper';
  menuItems: MenuItem[];
  constructor(public menuService: MenuService) {
    this.menuItems = menuService.getMenuItems();

    var row = {
      _id: new Date().toISOString(),
      action: 'AppComponent constructor',
    };
  }
}
