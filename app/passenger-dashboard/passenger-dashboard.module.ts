// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
//Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassangerFormComponent } from "./components/passanger-form/passanger-form.component";

//Services
import { PassengerDashboardService } from './passenger-dashboad.service';

const routes: Routes = [
  {
    path: 'passengers',
    children: [
        {path : '', component: PassengerDashboardComponent},
        {path : ':id', component: PassengerViewerComponent},
    ]
  },
];

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        PassengerDashboardComponent,
        PassengerViewerComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassangerFormComponent
    ],
    exports: [
        PassengerDashboardComponent,
        PassengerViewerComponent
    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {

}
