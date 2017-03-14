import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from "./not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    PassengerDashboardModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ]
})
export class AppModule { }
