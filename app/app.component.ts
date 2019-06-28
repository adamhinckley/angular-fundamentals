import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div>
      <button (click)="handleClick(username.value)">Get Value</button>
      // ref with a hashtag on line 10 is used on line 8. Template ref gives access to the
      //DOM element
      <input type="text" #username />
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = "Adam";

  handleChange(value: string) {
    this.name = value;
  }
  handleClick(value: string) {
    console.log(value);
  }
}
