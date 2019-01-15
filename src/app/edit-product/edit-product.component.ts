import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';
import { Product } from '../../model/Product';

@Component({
  selector: 'qjj-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, OnDestroy {
  private routeParams$: Subscription;
  public productID: string;
  public form: FormGroup;

  constructor(private route: ActivatedRoute,
              private api: ApiService,
              private fb: FormBuilder) {
    this.form = fb.group({
      name: []
    });

    this.routeParams$ = route.params.subscribe(params => {
      this.productID = params.id;
      this.getProduct(params.id);
    });
  }

  private getProduct(id: string): void {
    this.api.getProduct(id).subscribe(val => {
      this.form.patchValue(val);
    })
  }

  public updateProduct(): void {
    this.api.updateProduct(this.form.value, this.productID).subscribe(res => {
      console.log('ok');
    })
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.routeParams$.unsubscribe();
  }
}
