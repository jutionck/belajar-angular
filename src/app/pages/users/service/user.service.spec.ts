import { UserService } from "./user.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, inject, TestBed } from "@angular/core/testing";
import { User } from "../model/user.model";
import { Response } from "src/app/shared/models/response.model";

const page = 1;
const expectedUrl = `https://reqres.in/api/users`;

describe('UserServie', () => {

  let injector: TestBed;
  let userService: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    injector = getTestBed();
    userService = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // HttpTestingController#verify to make sure that there are no outstanding requests:
  // afterEach(() => {
  //   httpMock.verify();
  // });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getUsers', () => {
    it('should return an Observable<Response<User[]>>', () => {
      const dummyUsers = [
        {
          "id": 1,
          "email": "george.bluth@reqres.in",
          "first_name": "George",
          "last_name": "Bluth",
          "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
          "id": 2,
          "email": "janet.weaver@reqres.in",
          "first_name": "Janet",
          "last_name": "Weaver",
          "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
          "id": 3,
          "email": "emma.wong@reqres.in",
          "first_name": "Emma",
          "last_name": "Wong",
          "avatar": "https://reqres.in/img/faces/3-image.jpg"
        },
        {
          "id": 4,
          "email": "eve.holt@reqres.in",
          "first_name": "Eve",
          "last_name": "Holt",
          "avatar": "https://reqres.in/img/faces/4-image.jpg"
        },
        {
          "id": 5,
          "email": "charles.morris@reqres.in",
          "first_name": "Charles",
          "last_name": "Morris",
          "avatar": "https://reqres.in/img/faces/5-image.jpg"
        },
        {
          "id": 6,
          "email": "tracey.ramos@reqres.in",
          "first_name": "Tracey",
          "last_name": "Ramos",
          "avatar": "https://reqres.in/img/faces/6-image.jpg"
        }
      ];
      userService.getAll(1).subscribe((response: any) => {
        expect(response.length).toBe(6);
        expect(response).toEqual(dummyUsers);
      });
      const request = httpMock.expectOne(`${expectedUrl}?page=${page}`);
      request.flush(dummyUsers);
      expect(request.request.method).toBe("GET");
    });
  });

  describe('#saveUser', () => {
    it('should return an Observable<User>', () => {
      const dummyUser: User = {
        id: 0,
        first_name: 'Jution',
        last_name: 'Candra',
        email: 'jutionck@mipdevp.com',
        avatar: '-',
        job: 'Trainer'
      }
      userService.save(dummyUser).subscribe((response) => {
        expect(response.first_name).toBe('Jution');
      });
      const request = httpMock.expectOne(`${expectedUrl}`);
      expect(request.request.method).toBe('POST');
      request.flush(dummyUser);
    });
  });
});


