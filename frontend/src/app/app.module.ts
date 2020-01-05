import 'reflect-metadata';
import '../polyfills';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';

import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home/home.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbLayoutModule, NbMenuModule, NbSearchModule, NbSidebarModule, NbThemeModule, NbToastrModule, NbWindowModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {AccountingRoutingModule} from './accounting/accounting-routing.module';
import {AccountingModule} from './accounting/accounting.module';
import {TranslateModule} from '@ngx-translate/core';

// NG Translate

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,
    AccountingModule,
    AccountingRoutingModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbMenuModule,
    NbSearchModule,
    NbSidebarModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
