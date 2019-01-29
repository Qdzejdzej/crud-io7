import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ApiService } from '../api.service';
import { Product } from '../../model/Product';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'qjj-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.scss']
})
export class ShowAllComponent implements OnInit {
  public listProducts: Product[];
  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private api: ApiService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getProducts();
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
      if (res.status === 200) {
        this.snackBar.open(res.message, 'OK', { duration: 5000 });
        this.getProducts();
      }
    });
  }

  public editProduct(element: Product): void {
    console.log('edit', element)
  }
}
