import { fakeAsync, getTestBed, inject, TestBed, tick } from "@angular/core/testing"
import { UserService } from "./user.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"

describe('UserService', () => {

  let userService: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    userService = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // cek validasi aja untuk mock http controller nya
  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getUsers', () => {
    it('should return an Observable<Response<User[]>', () => {
      const mock = [
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
      // ada pesan SPEC HAS NO EXPECTATIONS, 
      // solution create request with httpMock
      const list = userService.getAll(1).toPromise();
      list.then((response: any) => {
        console.log('cek response', response);
        expect(response.length).toBe(6);
        expect(response).toEqual(mock);
      });
      const request = httpMock.expectOne('https://reqres.in/api/users?page=1');
      // request body
      request.flush(mock);
      expect(request.request.method).toBe('GET');
    });
  });

  describe('#saveUser', () => {
    it('should return an Observable<User>', () => {
      const mock =
      {
        "id": 111,
        "email": "jutionck@tokonyadia.com",
        "first_name": "Jution",
        "last_name": "Kirana",
        "avatar": "https://reqres.in/img/faces/1-image.jpg",
        "job": "Kang Koding"
      }
      userService.save(mock).subscribe((response) => {
        expect(response.first_name).toBe('Jution')
      });
      const request = httpMock.expectOne('https://reqres.in/api/users');
      request.flush(mock);
      expect(request.request.method).toBe('POST');
    });
  });
});