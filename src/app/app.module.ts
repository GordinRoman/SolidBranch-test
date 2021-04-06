import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingCardComponent } from './heading-card/heading-card.component';
import { TypeCardComponent } from './type-card/type-card.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { ListPageComponent } from './list-page/list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingCardComponent,
    TypeCardComponent,
    SummaryPageComponent,
    ListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
