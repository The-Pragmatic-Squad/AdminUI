import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountTransactionsHistoryComponent } from './account-transactions-history/account-transactions-history.component';

const routes: Routes = [
  {path:'' , component: AccountsComponent},
  {path:'add-account' , component: AddAccountComponent},
  {path:'transactions/:id', component: AccountTransactionsHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
