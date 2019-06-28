import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div>
      <button (click)="handleClick()">Change Name</button>
      <input type="text" [ngModel]="name" (ngModelChange)="handleChange($event)" />
      <input type="text" [(ngModel)]="name" />
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = "Adam";

  handleChange(value: string) {
    this.name = value;
  }
  handleClick() {
    this.name === "Bob" ? (this.name = "Adam") : (this.name = "Bob");
  }
}
