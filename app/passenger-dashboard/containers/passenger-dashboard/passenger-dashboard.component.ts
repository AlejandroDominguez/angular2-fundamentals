import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interfaces';
import { PassengerDashboardService } from "../../passenger-dashboad.service";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'passenger-dashboard',
    template: `
        <passenger-count [items]='passengers'></passenger-count>
        <passenger-detail *ngFor='let pass of passengers;'  [passenger]='pass' (remove)='onRemove($event)' (edit)='onEdit($event)' (view)="onView($event)"></passenger-detail>
    `,
    styleUrls: ['passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

    passengers: Passenger[];

    constructor(
        private router: Router,
        private passengerService: PassengerDashboardService) {

    }

    onEdit(event: Passenger) {
        alert(event.fullname);
        this.passengerService.updatePassengers(event).subscribe((data: Passenger) => {
            this.passengers.map((passanger: Passenger) => {
                if (passanger.id == data.id)
                    return Object.assign({}, passanger, event);
                return data;
            })
        })
    }

    onRemove(event: Passenger) {
        this.passengerService.removePassenger(event).subscribe((data: Passenger) => {
            this.passengers = this.passengers.filter(p => {
                return p.fullname !== event.fullname;
            })
        });
    }

    onView(event: Passenger) {
        this.router.navigate(['/passengers/', event.id])
    }

    ngOnInit(): void {
        this.passengerService
            .getPassengers()
            .subscribe((data: Passenger[]) => {
                this.passengers = data;
            });
    }
}
