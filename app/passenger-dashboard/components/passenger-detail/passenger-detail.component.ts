import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from './../../models/passenger.interfaces';



@Component({
    moduleId: module.id,
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div class="item"> 
            <span *ngIf='!editing'>{{passenger.fullname}}</span>
            <input *ngIf='editing' [value]="passenger.fullname" #name (change)="onNameChange(name.value)" />
            <button (click)="toggleEdit()">{{editing ? 'Done' : 'Edit'}}</button>
            <button (click)="onRemove()">Remove</button>
            <button (click)="onPatientDetails()">Details</button>
        </div>
    `
})
export class PassengerDetailComponent {

    @Input()
    passenger: Passenger;

    @Output()
    remove: EventEmitter<any> = new EventEmitter();
    
    @Output()
    view: EventEmitter<Passenger> = new EventEmitter();

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    editing: boolean = false;

    toggleEdit() {
        if(this.editing){
            this.edit.emit(this.passenger);
        }
        this.editing = !this.editing;
    }
    onNameChange(name) {
        this.passenger.fullname = name;
    }

    onRemove() {
        this.remove.emit(this.passenger);
    }

    onPatientDetails(){
        this.view.emit(this.passenger);

    }

}
