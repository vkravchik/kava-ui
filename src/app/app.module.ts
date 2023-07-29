import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KavaButtonComponent } from 'kava-components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KavaButtonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
