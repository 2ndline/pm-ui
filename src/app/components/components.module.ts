import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashPageComponent } from './navigation/splash-page/splash-page.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [SplashPageComponent, SearchComponent],
  exports: [SplashPageComponent, SearchComponent],
})
export class ComponentsModule {}
