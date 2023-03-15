import { Component } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  constructor() {}
  searchname: string;
  searchaddress: string;
  orleansproperty: boolean = false;

  search() {
    console.log(
      `Search for name: ${this.searchname}, address: ${this.searchaddress}, orleansproperty: ${this.orleansproperty}`
    );
  }
}
