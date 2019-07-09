import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <a routerLink="/">
      Home
    </a>
    <a routerLink="/oops">
      404
    </a>
    <div class="app"><router-outlet></router-outlet></div>
  `
})
export class AppComponent {}
