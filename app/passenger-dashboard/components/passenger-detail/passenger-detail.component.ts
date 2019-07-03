import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";
@Component({
  selector: "passenger-detail",
  styleUrls: ["passenger-detail.component.scss"],
  template: `
    <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name
        />
      </div>
      <div *ngIf="!editing">
        {{ detail.fullname }}
      </div>
      <div class="date">
        check in date:
        {{
          detail.checkInDate
            ? (detail.checkInDate | date: yMMMd | uppercase)
            : "Not checked in."
        }}
      </div>
      <div class="children">Children: {{ detail.children?.length || 0 }}</div>
      <button (click)="toggleEdit()">{{ editing ? "Done" : "Edit" }}</button>
      <button (click)="onRemove()">Delete</button>
    </div>
  `
})
export class PassengerDetailComponent implements OnChanges, OnInit {
  @Input()
  detail: Passenger;

  //fires event to parent component passenger-dashboard.component.ts
  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  //fires event to parent component passenger-dashboard.component.ts
  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  constructor() {}

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log("ngOnChanges");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  onNameChange(name: string) {
    this.detail.fullname = name;
  }
  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }
}
