import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  {path:'' , component: AccountsComponent},
  {path:'add-account' , component: AddAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
