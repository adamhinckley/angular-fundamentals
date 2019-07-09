import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  // ** is a wildcard route that loads a 404 component for routes that are not in the app.
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    // angular modules
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    // custom modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
