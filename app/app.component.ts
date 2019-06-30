import { Component } from "@angular/core";

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  // question mark in TS makes it optional
  checkInDate?: number | null;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  // pipes are on line 23 and 28
  // they can be chained together like shown in line 27.  Angular has a lot of built in pipes.
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname }}
          <p>{{ passenger | json }}</p>
          <div class="date">
            check in date:
            {{
              passenger.checkInDate
                ? (passenger.checkInDate | date: yMMMd | uppercase)
                : "Not checked in."
            }}
          </div>
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: "Stephen",
      checkedIn: true,
      checkInDate: 1490742000000
    },
    {
      id: 2,
      fullname: "Rose",
      checkedIn: false,
      checkInDate: null
    },
    {
      id: 3,
      fullname: "James",
      checkedIn: true,
      checkInDate: 1491606000000
    },
    {
      id: 4,
      fullname: "Louise",
      checkedIn: true,
      checkInDate: 1488412800000
    },
    {
      id: 5,
      fullname: "Tina",
      checkedIn: false,
      checkInDate: null
    }
  ];
}
