import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ApiService } from '../api.service';
import { Product } from '../../model/Product';

@Component({
  selector: 'qjj-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public form: FormGroup;

  constructor(private api: ApiService,
              private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required]
    });
  }
  ngOnInit() {
  }

  public addProduct(): void {
    this.api.addProduct(this.form.value).subscribe(res => {
      console.log('ok');
    })
  }
}
