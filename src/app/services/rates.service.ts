import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rate } from '../Rate';

@Injectable({
  providedIn: 'root'
})
export class RatesService {
  constructor(private http: HttpClient) {}

  getRates(base: string): Observable<Rate> {
    const url = `https://api.exchangerate.host/latest?base=${base}&symbols=
    UAH`;

    return this.http.get<Rate>(url);
  }
}
