// import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
// import { TestBed } from "@angular/core/testing";
// import { UserService } from "src/app/pages/users/service/user.service";
// import { LoginModel } from "../model/login.model";
// import { LoginService } from "./login.service"

// describe('LoginService', () => {

//   let loginService: LoginService;
//   let httpMock: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [LoginService],
//     });

//     loginService = TestBed.inject(LoginService);
//     httpMock = TestBed.inject(HttpTestingController);
//   });

//   it('should login user with API', (done) => {
//     const mockUser: LoginModel = {
//       email: 'eve.holt@reqres.in',
//       password: 'cityslicka'
//     };

//     // loginService.login(mockUser).subscribe(data => {
//     //   expect(data).toEqual(mockUser)
//     // })

//     const request = httpMock.expectOne('https://reqres.in/api/login');
//     expect(request.request.method).toBe('POST');
//     request.flush(mockUser);
//   })
// })