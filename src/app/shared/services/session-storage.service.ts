import { Injectable } from "@angular/core";
import { LoginModel } from "src/app/login/components/model/login.model";

@Injectable()
export class SessionStorageService {

  saveSessionStorage(key: string, value: LoginModel): void {
    sessionStorage.setItem(key, JSON.stringify(value))
  }

  saveToken(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  getSessionStroage(key: string): void {
    sessionStorage.getItem(key);
  }

  setRedirectBackUrl(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  getRedirectBackUrl(key: string): void {
    sessionStorage.getItem(key);
  }
}