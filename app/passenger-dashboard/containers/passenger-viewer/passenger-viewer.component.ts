import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { PassengerDashboardService } from "../../passenger-dashboad.service";
import { Passenger } from "../../models/passenger.interfaces";
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    template: `
        <div>
            <button (click)='goBack()'>Go back</button>
            <passanger-form [passenger]="passenger"></passanger-form>
        </div>
    `
})
@Injectable()
export class PassengerViewerComponent implements OnInit {

    passenger: Passenger;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private passengerService: PassengerDashboardService) {
    }

    ngOnInit() {

        this.route.params
            .switchMap((data) => this.passengerService.getPassenger(data.id))
            .subscribe((value: Passenger) => {
                this.passenger = value;
            });
    }

    goBack() {
        this.router.navigate(['/passengers']);
    }
}
