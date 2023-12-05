import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { productDetails } from './product/productDetails';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchBusesComponent } from './search-buses/search-buses.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ViewBusTicketComponent } from './view-bus-ticket/view-bus-ticket.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  /* rxjs topic */
  // {path:"",component:RxjsLearningComponent},
  // {path:"",component:SearchComponent},
  // {

  /* routing topic */

  //   path: "home", component: HomeComponent
  // },
  // {
  //   path: "product", component: ProductComponent
  // },
  // {
  //   path: "contact", component: ContactComponent
  // },

  // { path: "productDetails/:id", component: ProductDetailsComponent }

  /* full project topic */
  {
    path: "", component: LoginComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "searchBuses", component: SearchBusesComponent
  },
  {
    path: "selectSeats/:id", component: SelectSeatsComponent
  },
  {
    path: "userInfo/:id", component: UserInfoComponent
  },
  {
    path: 'viewBusTicket/:id/:userName/:mobile/:email', component: ViewBusTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
