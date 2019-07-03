import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

//containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

//components
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";

//service
import { PassengerDashboardService } from "./passenger-dashboard.service";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [CommonModule, HttpModule],

  //only the dashboard component needs to be exported because
  //that's the only one being used at the root of the app
  exports: [PassengerDashboardComponent],
  providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {}
