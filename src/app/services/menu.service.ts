import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuItems: MenuItem[] = [
    {
      routerLink: '/search',
      Title: 'Search',
    },
    {
      routerLink: '/settings',
      Title: 'Settings',
    }
  ];
  constructor() {}

  public getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}
