import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ApiService } from '../api.service';
import { Product } from '../../model/Product';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'qjj-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddProductComponent implements OnInit {
  public form: FormGroup;

  constructor(private api: ApiService,
              private fb: FormBuilder,
              private snackBar: MatSnackBar) {
    this.form = fb.group({
      name: ['', Validators.required]
    });
  }
  ngOnInit() {
  }

  public addProduct(): void {
    this.api.addProduct(this.form.value).subscribe(res => {
      if(res.status === 200) {
        this.form.reset();
        this.snackBar.open(res.message, 'OK', {
          panelClass: 'add-success',
          duration: 5000
        });
      } else {
        this.snackBar.open(res.message, 'Hmm...', {
          panelClass: 'add-error',
          duration: 5000
        });
      }
    })
  }
}
