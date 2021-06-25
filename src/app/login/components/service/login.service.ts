import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, retry } from "rxjs/operators";
import { LoginModel } from "../model/login.model";

@Injectable()
export class LoginService {

  constructor(
    private readonly http: HttpClient
  ) { }


  login(userLogin: LoginModel): Observable<string> {
    return this.http.post('https://reqres.in/api/login', userLogin)
      .pipe(
        retry(3),
        map((response: any) => response.token)
      );
  }
}