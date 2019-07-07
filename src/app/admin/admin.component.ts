import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  orders: any;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders);
  }

}
