import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import {TooltipModule} from 'ngx-bootstrap/tooltip';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BackComponent} from './back/back.component';
import {BicepsComponent} from './biceps/biceps.component';
import {ChestComponent} from './chest/chest.component';
import {CoreComponent} from './core/core.component';
import {LegsComponent} from './legs/legs.component';
import {TricepsComponent} from './triceps/triceps.component';
import {HomeComponent} from './home/home.component';
import {MuscleGroupComponent} from './muscle-group/muscle-group.component';

@NgModule({
  declarations: [
    AppComponent,
    BackComponent,
    BicepsComponent,
    ChestComponent,
    CoreComponent,
    HomeComponent,
    LegsComponent,
    TricepsComponent,
    MuscleGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
