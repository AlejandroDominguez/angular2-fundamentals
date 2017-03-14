import { Component, Input } from '@angular/core';
import { Form } from '@angular/forms';
import { Passenger } from "../../models/passenger.interfaces";

@Component({
    selector: 'passanger-form',
    styleUrls: ['passanger-form.component.scss'],
    template: `
           <form #form='ngForm' novalidate>
            <div>
                Passenger ID: 
                <input type='number' name='id' [ngModel]='passenger?.id'>
            </div>

            <div>
                Passenger name: 
                <input type='text' name='fullname' [ngModel]='passenger?.fullname'>
            </div>

           </form>
    `
})
export class PassangerFormComponent {

    @Input()
    passenger: Passenger

}
