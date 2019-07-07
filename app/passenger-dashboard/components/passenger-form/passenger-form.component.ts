import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import { Baggage } from "../../models/baggage.interface";

@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.component.scss"],
  template: `
    <form #form="ngForm" novalidate>
      {{ detail | json }}
      <div>
        Passenger Name:
        <input
          type="text"
          name="fullname"
          required
          #fullname="ngModel"
          [ngModel]="detail?.fullname"
        />
        <div *ngIf="fullname.errors?.required && fullname.touched" class="error">
            Passenger name is required
        </div>
      </div>
      <div>
        Passenger id:
        <input type="number" name="id" required #id="ngModel" [ngModel]="detail?.id" />
        <div *ngIf="id.errors?.required && id.touched" class="error">
            Passenger name is required
        </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)"
          />
        </label>
      </div>
      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input type="number" name="checkInDate" [ngModel]="detail?.checkInDate" />
      </div>
      <div>
        Luggage:
        <select name="baggage" [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage"
          >
            {{ item.value }}
          </option>
        </select>
      </div>
      <div>
        {{ form.value | json }}
      </div>
      <div>Valid: {{ form.valid | json }}</div>
      <div>Invalid: {{ form.invalid | json }}</div>
    </form>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;

  baggage: Baggage[] = [
    {
      key: "none",
      value: "no baggage"
    },
    {
      key: "carry",
      value: "carry on baggage"
    },
    {
      key: "checked-baggage",
      value: "checked baggage"
    },
    {
      key: "check-carry",
      value: "carry on and checked baggage"
    }
  ];

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }
}
