import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Response } from "src/app/shared/models/response.model";
import { User } from "../../model/user.model";
import { UserService } from "../../service/user.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html'
})
export class ListUserComponent implements OnInit {

  users: User[] = [];
  page: number = 0;
  totalPage: number = 0;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((queryParam: Params) => {
      this.page = queryParam.page || 1;
      this.userService.getAll(this.page)
        .subscribe(
          ({ total_pages, data: users }: Response<User[]>) => {
            console.log(users);
            this.users = users;
            this.totalPage = total_pages;
          })
    });

    // this.activatedRoute.params.subscribe((params: Params) => {
    //   console.log('path variable', params);
    // })

  }
}