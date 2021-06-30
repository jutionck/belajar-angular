import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { retry } from "rxjs/operators";
import { Response } from "src/app/shared/models/response.model";
import { environment } from "src/environments/environment";
import { User } from "../model/user.model";
@Injectable()
export class UserService {

  apiUrl: string = 'https://reqres.in/api';

  constructor(
    private readonly http: HttpClient
  ) { }

  getAll(page: number = 1): Observable<Response<User[]>> {
    return this.http.get<Response<User[]>>(`https://reqres.in/api/users?page=${page}`);
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user)
      .pipe(retry(3));
  }
}