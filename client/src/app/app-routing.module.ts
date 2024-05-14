import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {BackComponent} from './back/back.component';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import {AppComponent} from './app.component';
// import {BicepsComponent} from './biceps/biceps.component';
// import {ChestComponent} from './chest/chest.component';
// import {CoreComponent} from './core/core.component';
// import {LegsComponent} from './legs/legs.component';
// import {TricepsComponent} from './triceps/triceps.component';
import {HomeComponent} from './home/home.component';
import {MuscleGroupComponent} from './muscle-group/muscle-group.component';

const routes: Routes = [
  {path: 'exercise/:muscleGroup', component: MuscleGroupComponent},
  {path: 'home', component: HomeComponent},
  // {path: 'exercise/back', component: BackComponent},
  // {path: 'exercise/biceps', component: BicepsComponent},
  // {path: 'exercise/chest', component: ChestComponent},
  // {path: 'exercise/core', component: CoreComponent},
  // {path: 'exercise/legs', component: LegsComponent},
  // {path: 'exercise/triceps', component: TricepsComponent},
  // {path: 'home', component: HomeComponent},
  // {path: 'exercise/:muscleGroup', component: MuscleGroupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
