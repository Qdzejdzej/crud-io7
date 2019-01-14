import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ApiService } from './api.service';
import { Product } from '../model/Product';

@Component({
  selector: 'qjj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'CRUD';
  public form: FormGroup;
  public listProducts: Product[];
  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private api: ApiService,
              private fb: FormBuilder) {
      this.form = fb.group({
        name: ['', Validators.required]
      });
  }

  ngOnInit() {
    this.getProducts();
  }

  public addProduct(): void {
    this.api.addProduct(this.form.value).subscribe(res => {
      this.getProducts();
    })
  }

  public getProducts(): void {
    this.api.getAllProducts().subscribe((res: Product[]) => {
      this.listProducts = res;
      this.dataSource = new MatTableDataSource<Product>(this.listProducts);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  public removeProduct(element: Product): void {
    this.api.removeProduct(element).subscribe(res => {
      this.getProducts();
    });
  }

  public editProduct(element: Product): void {
    console.log('edit', element)
  }
}
