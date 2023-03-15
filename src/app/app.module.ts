import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import { MenuService } from './services/menu.service';
import { ComponentsModule } from './components/components.module';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { SearchComponent } from './components/search/search.component';
import { SplashPageComponent } from './components/navigation/splash-page/splash-page.component';
const routes: Routes = [
  {
    path: '',
    component: SplashPageComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    ComponentsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [MenuService],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
