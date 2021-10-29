import { Item } from './../model/Item';
import { environment } from './../../environments/environment.prod';
import { MockData } from './mock';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = 'http://localhost:9000';
  constructor(private http: HttpClient) { }
  mock: MockData = new MockData();


  createItem(newItem: Item){
 return   this.http.post(this.url+ '/createItem', newItem);
  }
  getAllItems(): Observable<any> {
    //Return array of items
    if (!environment.production) {
      return this.mock.getItems();
    }
    return this.http.get(this.url + '/items');

  }
  getAllCutomers() {
    //Return array of Customers
    if (!environment.production) {
      return this.mock.getCustomers();
    }
    return this.http.get(this.url + '/customers');
  }

  getItem(id: string) {
    //Return item with given id
    return this.http.get(this.url + '/item');
  }

  getCustomer(id: string) {
    //Return customer with given id
  }

  addCustItem(item) {
    console.log(item);
    return this.http.post(this.url + '/addItem', item);
  }
}
