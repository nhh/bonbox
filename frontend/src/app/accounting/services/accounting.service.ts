import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {


  constructor(private http: HttpClient) {}

  findById(id: number) {
    return this.http.get('/api/customers' + id).toPromise();
  }

  create(order: {name: string, phone: string}) {
    return this.http.post('/api/customers', order).toPromise();
  }

  getAllCustomers() {
    return this.http.get<Array<{name: string, phone: string}>>('/api/customers').toPromise();
  }

}
