import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableExampleComponent } from './table-example/table-example.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterLinkActive } from '@angular/router';
import { SearchBusesComponent } from './search-buses/search-buses.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ViewBusTicketComponent } from './view-bus-ticket/view-bus-ticket.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RxjsLearningComponent,
    SearchComponent,
    TableExampleComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    ProductDetailsComponent,
    SearchBusesComponent,
    SelectSeatsComponent,
    UserInfoComponent,
    ViewBusTicketComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterLinkActive,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
