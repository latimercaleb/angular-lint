import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { SubComponent } from './components/sub/sub.component';
import { CollectionComponent } from './components/collection/collection.component';
import { CardComponent } from './components/collection/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    SubComponent,
    CollectionComponent,
    CardComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,AvatarModule,AvatarGroupModule,BadgeModule,DropdownModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
