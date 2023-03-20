import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Pages/Product/add-product/add-product.component';
import { EditProductComponent } from './Pages/Product/edit-product/edit-product.component';
import { ProductComponent } from './Pages/Product/product/product.component';
import { AddTransactionComponent } from './Pages/Transaction/add-transaction/add-transaction.component';
import { EditTransactionComponent } from './Pages/Transaction/edit-transaction/edit-transaction.component';
import { TransactionsComponent } from './Pages/Transaction/transactions/transactions.component';
import { AddUserComponent } from './Pages/User/add-user/add-user.component';
import { EditUserComponent } from './Pages/User/edit-user/edit-user.component';
import { UserComponent } from './Pages/User/user/user.component';

const routes: Routes = [
  { path:'products', component: ProductComponent },
  { path: '', redirectTo:'products', pathMatch:'full' },
  { path:'products/addProduct', component: AddProductComponent },
  { path:'products/editProduct/:id', component: EditProductComponent },
  { path:'users', component: UserComponent },
  { path:'users/addUser', component: AddUserComponent },
  { path:'users/editUser/:id', component: EditUserComponent },
  { path:'transactions', component: TransactionsComponent },
  { path:'transactions/addTransaction', component: AddTransactionComponent },
  { path:'transactions/editTransaction/:id', component: EditTransactionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
