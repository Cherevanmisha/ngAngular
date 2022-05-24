import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IUser} from "../../user-interface/IUser";
import {UserServiceService} from "../user.service.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserResolversService implements Resolve<IUser>{

  constructor(private userServiceService:UserServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    const{id} =route.params;
    return this.userServiceService.getUser(id);
  }
}
