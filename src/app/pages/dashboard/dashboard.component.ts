import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  sidebarItems: any[] = [
    {
      id:1,
      title: "Accordion table",
      icon: "bi bi-box",
      navigationUrl: "/accordion-table",
      disableClick: false,
      labelColor: ""
    },
    {
      id:2,
      title: "",
      icon: "bi bi-box",
      navigationUrl: "",
      disableClick: false,
      labelColor: ""
    }
  ];
}
