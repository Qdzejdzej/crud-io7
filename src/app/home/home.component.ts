import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qjj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title = 'CRUD';
  constructor() { }

  ngOnInit() {
  }

}
