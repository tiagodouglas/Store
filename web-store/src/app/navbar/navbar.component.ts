import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public title: String = 'WebStore'
  isCollapsed: Boolean; 
  constructor() { 
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

}
