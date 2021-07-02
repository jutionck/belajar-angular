import { Component, OnInit } from "@angular/core";
import { User } from "../../model/user.model";
import { UserService } from "../../service/user.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html'
})
export class ListUserComponent implements OnInit {
  users: User[] = [];
  page = 0;

  constructor(
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {

    this.userService.getAll()
      .subscribe((users: User[]) => {
        console.log(users);
        this.users = users;
      });
  }
}