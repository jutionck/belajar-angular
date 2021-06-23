import { Observable, Observer } from "rxjs";
import { map, retry, tap } from "rxjs/operators";
import { Response } from "src/app/shared/models/response.model";
import { User } from "../model/user.model";

export class UserService {

  getAll(page: number = 1): Observable<Response<User[]>> {
    return new Observable((observer: Observer<Response<User[]>>) => {
      const request = fetch(`https://reqres.in/api/users?page=${page}`);
      request
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          observer.next(data);
        })
        .catch((error) => {
          observer.error(error);
        })
    })
      .pipe(
        tap(() => console.log('request users')),
        retry(5)
      )
  }
}