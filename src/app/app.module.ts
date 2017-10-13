import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NglModule } from 'ng-lightning/ng-lightning';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    NglModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
