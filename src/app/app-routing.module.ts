import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './common/layout/components/about/about.component';
import { CarModelsComponent } from './common/layout/components/car-models/car-models.component';
import { DashboardComponent } from './common/layout/components/dashboard/dashboard.component';
import { HedderComponent } from './common/layout/components/hedder/hedder.component';
import { LocationComponent } from './common/layout/components/location/location.component';

const routes: Routes = [



{path: '' ,component: DashboardComponent},
{path: 'home' ,component: DashboardComponent},
{path: 'car-models' , component: CarModelsComponent},
{path: 'location' , component:LocationComponent},
{path: 'about' , component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
