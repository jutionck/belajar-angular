import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Response } from "src/app/shared/models/response.model";
import { User } from "../../model/user.model";
import { UserService } from "../../service/user.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html'
})
export class ListUserComponent implements OnInit {
  users: User[] = [];
  page = 0;
  totalPage = 0;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
    // query string/params setelah tanda ?,
    // contoh: ?page=1&search=
    this.activatedRoute.queryParams
      .subscribe((queryParams: Params) => {

        this.page = queryParams.page || 1;

        this.userService.getAll(this.page)
          .subscribe(
            ({ total_pages, data: users }: Response<User[]>) => {
              console.log(users);

              this.users = users;
              this.totalPage = total_pages;
            });
      });

    // path variable biasanya muncul setelah /,
    // contoh: list/12345
    // this.activatedRoute.params
    //   .subscribe((params: Params) => {
    //     console.log('path variable:', params);
    //   });
  }
}