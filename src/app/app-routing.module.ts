import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './MyComponents/main-screen/main-screen.component';
import { CatchAllOptionComponent } from './MyComponents/catch-all-option/catch-all-option.component';
import { AnalyticsOptionComponent } from './MyComponents/analytics-option/analytics-option.component';
import { IntentOptionComponent } from './MyComponents/intent-option/intent-option.component';

const routes: Routes = [
  { path: '', component: IntentOptionComponent },
  {
    path: 'catch',
    component: CatchAllOptionComponent,
  },
  { path: 'analysis', component: AnalyticsOptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
