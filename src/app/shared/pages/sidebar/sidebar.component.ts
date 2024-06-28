import { Component } from '@angular/core';
import { faPooStorm, faUser } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from "@fortawesome/angular-fontawesome";


@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  iconFaPooStorm: IconDefinition = faPooStorm;
  iconFaUser: IconDefinition = faUser;
}
