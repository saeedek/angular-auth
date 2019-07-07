import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = "http://localhost:3000/orders"
  constructor(private client : HttpClient) { }

  getOrders() { 
    return this.client.get(this.url);
  }
}
