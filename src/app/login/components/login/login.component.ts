import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessageService } from 'src/app/shared/services/flash.service';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';
import { LoginModel } from '../model/login.model';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly sessionStorageService: SessionStorageService,
    private readonly router: Router,
    private readonly loginService: LoginService,
    private readonly flash: FlashMessageService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  submitForm(): void {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      const redirectBackUrl = this.flash.get();
      this.loginService.login({
        email,
        password
      }).subscribe((token) => {
        if (token) {
          this.sessionStorageService.saveToken('credentials', token);
          this.router.navigateByUrl(redirectBackUrl || '/')
        }
      }, (error) => {
        const messsage = error.error;
        alert(messsage.error)
      });
    }
  }

}
