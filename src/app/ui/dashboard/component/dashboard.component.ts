import {Component} from "@angular/core";
import {faFaceLaughBeam} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  iconFaFaceLaughBeam: IconDefinition = faFaceLaughBeam;
}
