import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { SubComponent } from './components/sub/sub.component';
import { CollectionComponent } from './components/collection/collection.component';
import { CardComponent } from './components/collection/card/card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    SubComponent,
    CollectionComponent,
    CardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
