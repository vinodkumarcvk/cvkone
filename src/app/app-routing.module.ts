import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { CategoriesComponent } from './categories/categories.component';
import { OrdersComponent } from './orders/orders.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CategoryMainComponent } from './category-main/category-main.component';
import { PromoCodesComponent } from './promo-codes/promo-codes.component';
import { PaymentsComponent } from './payments/payments.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'products', component: CategoriesComponent },
  {path: 'category', component: CategoryMainComponent},
  { path: 'subCategory', component: SubCategoriesComponent },
  { path: 'customer', component: CustomersComponent },
  { path: 'promoCode', component: PromoCodesComponent },
  {path: 'paymemt', component: PaymentsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
