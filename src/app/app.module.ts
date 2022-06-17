import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreshComponent } from './fresh/fresh.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ComputersComponent } from './computers/computers.component';
import { ToysComponent } from './toys/toys.component';
import { SimCardComponent } from './sim-card/sim-card.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BindingDemoComponent } from './binding-demo/binding-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    FreshComponent,
    MobilesComponent,
    ComputersComponent,
    ToysComponent,
    SimCardComponent,
    AccessoriesComponent,
    PageNotFoundComponent,
    BindingDemoComponent,
    FormsComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
