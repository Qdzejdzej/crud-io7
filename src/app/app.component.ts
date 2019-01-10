import { Component } from '@angular/core';
import { ApiService } from './api.service'

@Component({
  selector: 'qjj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud';

  constructor(private api: ApiService) {
      api.getAllProducts().subscribe(res => {
        console.log(res);
      })
  }


}
