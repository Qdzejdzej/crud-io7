import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ApiService } from '../api.service';
import { Product } from '../../model/Product';

@Component({
  selector: 'qjj-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  @Input() btnName: string;
  @Input() form: FormGroup;
  @Output() action = new EventEmitter();

  constructor() { }

  ngOnInit() { }
}
