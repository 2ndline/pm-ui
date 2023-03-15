import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SplashPageComponent } from './navigation/splash-page/splash-page.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [SplashPageComponent, SearchComponent],
  exports: [SplashPageComponent, SearchComponent],
})
export class ComponentsModule {}
