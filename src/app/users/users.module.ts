import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './users-component/user/user.component';
import { UsersComponent } from './users-component/users/users.component';
import { UserDetailsComponent } from './users-component/user-details/user-details.component';
import {UserServiceService} from "./user-services/user.service.service";
import {UserResolversService} from "./user-services/resolves/resolvers.service";


@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    UserDetailsComponent
  ],


  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers:[UserServiceService,
  UserResolversService]
})
export class UsersModule { }
