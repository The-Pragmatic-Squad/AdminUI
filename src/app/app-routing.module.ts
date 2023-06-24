import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

const routes: Routes = [
  {path:'' , component: AccountsComponent},
  {path:'add-account' , component: AddAccountComponent},
  {path: 'view-accounts', component: AccountsComponent},
  // {path:'transactions/:id', component: AccountTransactionsHistoryComponent},
  {path:'view-details/:id', component: AccountDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
