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
  currentPage: number;
  starRow: number = 1;
  page: number = 0;
  totalPage: number = 0;
  totalRows: number;
  rowsPerPage: number;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly userService: UserService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParam: Params) => {
      this.page = queryParam.page || 1;
      this.loadData(this.page);
    });
  }

  loadData(page: number): void {
    if (page) {
      this.currentPage = page;
    }
    this.userService.getAll(this.page)
      .subscribe((response: Response<User[]>) => {
        this.users = response.data;
        this.page = response.page;
        this.totalPage = response.total_pages;
        if (this.page > 1) {
          this.starRow = (this.page - 1) * this.rowsPerPage + 1;
        } else {
          this.starRow = 1;
        }
      })
  }
}