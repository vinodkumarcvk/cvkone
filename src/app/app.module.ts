import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';

import { CustomersComponent } from './customers/customers.component';
import { PromoCodesComponent } from './promo-codes/promo-codes.component';
import { PaymentsComponent } from './payments/payments.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CategoryMainComponent } from './category-main/category-main.component';
import { ProductDescripComponent } from './product-descrip/product-descrip.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrdersComponent,
    CategoriesComponent,
    SubCategoriesComponent,

    CustomersComponent,
    PromoCodesComponent,
    PaymentsComponent,
    LoginComponent,
    SignupComponent,
    CategoryMainComponent,
    ProductDescripComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
