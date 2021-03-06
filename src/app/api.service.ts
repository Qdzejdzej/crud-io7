import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url = 'http://localhost:4000/product';

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._url);
  }

  public getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this._url}/${id}`);
  }

  public updateProduct(product: Product, id: string): Observable<any> {
    return this.http.put(`${this._url}/update/${id}`, product);
  }

  public addProduct(product: Product): Observable<any> {
    return this.http.post(`${this._url}/add`, product);
  }

  public removeProduct(product: Product): Observable<any> {
    return this.http.delete(`${this._url}/delete/${product._id}`);
  }
}
