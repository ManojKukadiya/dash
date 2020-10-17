import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  sidenavWidth = 210;
  leftsidenavWidth = 55;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(collapsedNavbar) {
    collapsedNavbar ? this.sidenavWidth = 55 : this.sidenavWidth = 210;
  }

}
