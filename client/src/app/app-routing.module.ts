import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BackComponent} from './back/back.component';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {AppComponent} from './app.component';
import {BicepsComponent} from './biceps/biceps.component';
import {ChestComponent} from './chest/chest.component';
import {CoreComponent} from './core/core.component';
import {LegsComponent} from './legs/legs.component';
import {TricepsComponent} from './triceps/triceps.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'back', component: BackComponent},
  {path: 'biceps', component: BicepsComponent},
  {path: 'chest', component: ChestComponent},
  {path: 'core', component: CoreComponent},
  {path: 'legs', component: LegsComponent},
  {path: 'triceps', component: TricepsComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
