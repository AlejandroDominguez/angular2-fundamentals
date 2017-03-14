import { Component, Input } from '@angular/core';

import { Passenger } from './../../models/passenger.interfaces';

@Component({
    moduleId: module.id,
    selector: 'passenger-count',
    styleUrls: ['passenger-count.component.scss'],
    template: `
        <h3>Airline Passenger</h3>
        <div>
            CheckedIn passenger: {{countCheckedIn()}} / {{items?.length}}
        </div>
    `
})

export class PassengerCountComponent {

    @Input()
    items: Passenger[];

    countCheckedIn() {
        if (!this.items)
            return;
        return this.items.filter(p=>p.checkedIn).length;
    }

    constructor() {

    }
}
