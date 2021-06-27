import { UserService } from "./user.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { inject, TestBed } from "@angular/core/testing";
import { User } from "../model/user.model";
import { Response } from "src/app/shared/models/response.model";

const page = 1;
const expectedUrl = `https://reqres.in/api/users?page=${page}`;

const expectGetUser = [
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
]

describe('UserServie', () => {

  let userService: UserService;
  let controller: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    userService = TestBed.inject(UserService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  })

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }))

  it(`list user from ${expectedUrl}`, () => {
    let users: User[];
    userService.getAll(page).subscribe((response: Response<User[]>) => {
      users = response.data;
    });
    const request = controller.expectOne(expectedUrl);
    request.flush(expectGetUser);

    expect(expectGetUser.length).toBe(6);
    expect(users).toEqual(expectGetUser);
    expect(request.request.method).toBe('GET');
  })
})