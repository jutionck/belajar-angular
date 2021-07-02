import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { retry } from "rxjs/operators";
import { Response } from "src/app/shared/models/response.model";
import { environment } from "src/environments/environment";
import { User } from "../model/user.model";
@Injectable()
export class UserService {

  apiUrl: string = 'http://localhost';

  constructor(
    private readonly http: HttpClient
  ) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/api/users`)
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/api/users`, user)
      .pipe(retry(3));
  }
}