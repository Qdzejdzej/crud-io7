import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ApiService } from './api.service';
import { Product } from '../model/Product';

@Component({
  selector: 'qjj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'crud';
  public form: FormGroup;
  public listProducts: Product;

  constructor(private api: ApiService,
              private fb: FormBuilder) {
      this.form = fb.group({
        name: ['', Validators.required]
      });
  }

  public addProduct(): void {
    this.api.addProduct(this.form.value).subscribe(res => {
      console.log(res);
    })
  }

  public getProducts(): void {
    this.api.getAllProducts().subscribe((res: Product) => {
      console.log(res);
      this.listProducts = res;
    });
  }
}
