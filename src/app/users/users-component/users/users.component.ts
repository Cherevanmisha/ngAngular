import { Component, OnInit } from '@angular/core';
import {IUser} from "../../user-interface/IUser";
import {UserServiceService} from "../../user-services/user.service.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];
  constructor(private userServiceService:UserServiceService) { }

  ngOnInit(): void {
    this.userServiceService.getUsers().subscribe(value => this.users = value);
  }

}
