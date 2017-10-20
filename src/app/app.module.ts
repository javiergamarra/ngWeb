import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BodyComponent } from './body/body.component';

import { FooterComponent } from './footer/footer.component';

import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';

import {MatMenuModule} from '@angular/material';
import { MenuComponent } from 'app/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
