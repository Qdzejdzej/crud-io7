import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<any> {
    return this.http.get(this._url);
  }
}
