import {Component, OnInit} from '@angular/core';
import {NbWindowService, NbWindowState} from "@nebular/theme";
import {OrderFormComponent} from "./components/order-form/order-form.component";

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent implements OnInit {

  constructor(private windowService: NbWindowService) {}

  ngOnInit() {}

  createNewOrder() {
    this.windowService.open(OrderFormComponent, { title: `Neuer Kontakt`, hasBackdrop: true, initialState: NbWindowState.FULL_SCREEN, closeOnBackdropClick: false });
  }

}
