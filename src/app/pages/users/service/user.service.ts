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
    return this.http.get<Response<User[]>>(`${this.apiUrl}/users?page=${page}`)

      // Demo CORS
      // return this.http
      //   .get<any>(`${environment.apiBaseUrl}/premium/courses`)
      .pipe(retry(3));

    //   return new Observable((observer: Observer<Response<User[]>>) => {
    //     const request = fetch(`https://reqres.in/api/users?page=${page}`);
    //     request
    //       .then((response) => {
    //         return response.json();
    //       })
    //       .then((data) => {
    //         observer.next(data);
    //       })
    //       .catch((error) => {
    //         observer.error(error);
    //       })
    //   })
    //     .pipe(
    //       tap(() => console.log('request users')),
    //       retry(5)
    //     )
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user)
      .pipe(retry(3));
  }
}