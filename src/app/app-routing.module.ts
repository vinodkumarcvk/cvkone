import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { CategoriesComponent } from './categories/categories.component';
import { OrdersComponent } from './orders/orders.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { componentFactoryName } from '@angular/compiler';


const routes: Routes = [
  { path: 'order', component: OrdersComponent },
  { path: 'products', component: CategoriesComponent },
  { path: 'subCategory', component: SubCategoriesComponent },
  {path: 'customer', component: CustomersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
{path: 'category', component: CategoriesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
