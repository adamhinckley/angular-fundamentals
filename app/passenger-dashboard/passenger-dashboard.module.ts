import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

//containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";
//components
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";

//service
import { PassengerDashboardService } from "./passenger-dashboard.service";

const routes: Routes = [
  {
    path: "passengers",
    component: PassengerDashboardComponent
  }
];

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent
  ],
  //forChild is used because this is a child component
  imports: [CommonModule, HttpModule, FormsModule, RouterModule.forChild(routes)],

  exports: [PassengerViewerComponent],
  providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {}
