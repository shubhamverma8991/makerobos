import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { TopBarComponent } from './MyComponents/top-bar/top-bar.component';
import { MainScreenComponent } from './MyComponents/main-screen/main-screen.component';
import { MainOptionsComponent } from './MyComponents/main-options/main-options.component';
import { OptionsDisplayComponent } from './MyComponents/options-display/options-display.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopBarComponent,
    MainScreenComponent,
    MainOptionsComponent,
    OptionsDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
