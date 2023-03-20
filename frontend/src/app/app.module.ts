import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Pages/Product/product/product.component';
import { AddProductComponent } from './Pages/Product/add-product/add-product.component';
import { EditProductComponent } from './Pages/Product/edit-product/edit-product.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UserComponent } from './Pages/User/user/user.component';
import { AddUserComponent } from './Pages/User/add-user/add-user.component';
import { EditUserComponent } from './Pages/User/edit-user/edit-user.component';
import { TransactionsComponent } from './Pages/Transaction/transactions/transactions.component';
import { AddTransactionComponent } from './Pages/Transaction/add-transaction/add-transaction.component';
import { EditTransactionComponent } from './Pages/Transaction/edit-transaction/edit-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddProductComponent,
    EditProductComponent,
    NavbarComponent,
    UserComponent,
    AddUserComponent,
    EditUserComponent,
    TransactionsComponent,
    AddTransactionComponent,
    EditTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
