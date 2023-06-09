import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ErrorComponent } from './error/error.component';
import { Page2ByIdComponent } from './page2-by-id/page2-by-id.component';
import { LoginComponent } from './login/login.component';
import { CoreModule } from './core';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    ErrorComponent,
    Page2ByIdComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
