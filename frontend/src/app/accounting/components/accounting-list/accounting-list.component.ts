import { Component, OnInit } from '@angular/core';
import {AccountingService} from '../../services/accounting.service';

@Component({
  selector: 'app-accounting-list',
  templateUrl: './accounting-list.component.html',
  styleUrls: ['./accounting-list.component.scss']
})
export class AccountingListComponent implements OnInit {

  constructor(private customerService: AccountingService) {}

  customColumn = 'name';
  defaultColumns = [ 'size', 'kind', 'items' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  data = [];

  ngOnInit() {
    this.customerService.getAllCustomers().then(customers =>  {
      this.data = customers.map(c => ({data: c}));
    });
  }

}
