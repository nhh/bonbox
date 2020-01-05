import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import {NbMenuModule, NbSidebarModule} from "@nebular/theme";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, SidebarComponent],
  imports: [CommonModule, TranslateModule, FormsModule, NbMenuModule, NbSidebarModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, SidebarComponent]
})
export class SharedModule {}
