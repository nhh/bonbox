import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AccountingComponent} from "./accounting.component";
import {AccountingListComponent} from "./components/accounting-list/accounting-list.component";

const routes: Routes = [
  {
    path: 'accounting',
    component: AccountingComponent,
    children: [
      {
        path: "",
        component: AccountingListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule {}
