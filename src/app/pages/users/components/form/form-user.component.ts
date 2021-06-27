import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
})
export class FormUserComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      first_name: new FormControl(null, [Validators.required]),
      last_name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      avatar: new FormControl(null, [Validators.required]),
      job: new FormControl(null, [Validators.required]),
    })
  }

  getErrors(formControlName: string): any[] {
    const control: AbstractControl = this.form.get(formControlName);
    const errors = control.errors;

    if (control.invalid && (control.dirty || control.touched) && errors) {
      return Object.keys(errors).map((key) => {
        return `${formControlName} ${key} ${errors[key]}`
      });
    } else {
      return [] as string[];
    }
  }

  submitFormData(): void {
    const user: User = this.form.value;
    this.userService.save(user).subscribe((response) => {
      alert(`user ${response.first_name} has been saved!`)
    })
    // user service
  }
}
