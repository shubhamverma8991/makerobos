import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { TopBarComponent } from './MyComponents/top-bar/top-bar.component';
import { MainScreenComponent } from './MyComponents/main-screen/main-screen.component';
import { MainOptionsComponent } from './MyComponents/main-options/main-options.component';
import { OptionsDisplayComponent } from './MyComponents/options-display/options-display.component';
import { AddIntentComponent } from './MyComponents/add-intent/add-intent.component';
import { FormsModule } from '@angular/forms';
import { CatchAllOptionComponent } from './MyComponents/catch-all-option/catch-all-option.component';
import { AnalyticsOptionComponent } from './MyComponents/analytics-option/analytics-option.component';
import { IntentOptionComponent } from './MyComponents/intent-option/intent-option.component';
import { SelectIntentComponent } from './MyComponents/select-intent/select-intent.component';
import { IntentSearchComponent } from './MyComponents/intent-search/intent-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopBarComponent,
    MainScreenComponent,
    MainOptionsComponent,
    OptionsDisplayComponent,
    AddIntentComponent,
    CatchAllOptionComponent,
    AnalyticsOptionComponent,
    IntentOptionComponent,
    SelectIntentComponent,
    IntentSearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
