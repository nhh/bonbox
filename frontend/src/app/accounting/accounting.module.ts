import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule, NbTreeGridModule,
  NbWindowModule
} from "@nebular/theme";
import {AccountingComponent} from "./accounting.component";
import {AccountingListComponent} from "./components/accounting-list/accounting-list.component";
import {AccountingRoutingModule} from "./accounting-routing.module";
import {OrderFormComponent} from './components/order-form/order-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AccountingComponent, AccountingListComponent, OrderFormComponent],
  imports: [CommonModule, SharedModule, AccountingRoutingModule, NbCardModule, NbWindowModule, NbInputModule, NbButtonModule, NbActionsModule, NbIconModule, NbTreeGridModule, ReactiveFormsModule],
  entryComponents: [OrderFormComponent]
})
export class AccountingModule {}
