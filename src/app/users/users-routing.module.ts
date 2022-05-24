import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from "./users-component/users/users.component";
import {UserDetailsComponent} from "./users-component/user-details/user-details.component";

import {UserResolversService} from "./user-services/resolves/resolvers.service";

const routes: Routes = [
  {path:'', component:UsersComponent, children:[
      {path:':id', component:UserDetailsComponent,resolve:{data:UserResolversService}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
