import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  // Lines 12-14 is what's happening under the hood with *
  // Line 17 *ngIf Only renders when name has length
  template: `
    <div class="app">
      <input type="text" [value]="name" (input)="handleChange($event.target.value)" />

      <template [ngIf]="name.length > 2">
        <div *ngIf="name.length">Searching for... {{ name }}</div>
      </template>

      <div *ngIf="name.length">Searching for... {{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = "";

  handleChange(value: string) {
    this.name = value;
  }
  handleClick(value: string) {
    console.log(value);
  }
}
