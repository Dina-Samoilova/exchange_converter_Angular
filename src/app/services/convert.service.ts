import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Convert } from '../Convert';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor(private http: HttpClient) { }

  getConverted(from: string, to: string, amount: string): Observable<Convert> {
    const url = 'https://api.exchangerate.host/convert?from='
    +from+'&to='+to+'&amount='+amount;

    return this.http.get<Convert>(url);
  }
}
