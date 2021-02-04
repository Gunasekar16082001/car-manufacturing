import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HedderComponent } from './common/layout/components/hedder/hedder.component';
import { FooterComponent } from './common/layout/components/footer/footer.component';
import { CarModelsComponent } from './common/layout/components/car-models/car-models.component';
import { DashboardComponent } from './common/layout/components/dashboard/dashboard.component';
import { LocationComponent } from './common/layout/components/location/location.component';
import { AboutComponent } from './common/layout/components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HedderComponent,
    
    FooterComponent,
 
    CarModelsComponent,
    DashboardComponent,
    LocationComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
