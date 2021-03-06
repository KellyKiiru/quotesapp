import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCmpntComponent } from './form/form-cmpnt/form-cmpnt.component';
import { QuotesComponent } from './form/quotes/quotes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TimeElapsedPipe } from './time-elapsed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormCmpntComponent,
    QuotesComponent,
    NavbarComponent,
    TimeElapsedPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
