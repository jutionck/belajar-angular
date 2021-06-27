import { UserService } from "./user.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { inject, TestBed } from "@angular/core/testing";
import { User } from "../model/user.model";
import { Response } from "src/app/shared/models/response.model";

const page = 1;
const expectedUrl = `https://reqres.in/api/users`;

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
];

const dummyUser: User = {
  id: 0,
  first_name: 'Jution',
  last_name: 'Candra',
  email: 'jutionck@mipdevp.com',
  avatar: '-',
  job: 'Trainer'
}

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

  it(`should retrieve users from the API via GET`, () => {
    userService.getAll(page).subscribe((response: Response<User[]>) => {
      expect(response.data.length).toBe(6);
      expect(response.data).toEqual(expectGetUser);

    });
    const request = controller.expectOne(`${expectedUrl}?page=${page}`);
    request.flush(expectGetUser);
    expect(request.request.method).toBe('GET');
  });

  it(`should saving data user to API via POST`, () => {
    userService.save(dummyUser).subscribe((response) => {
      expect(response.first_name).toBe('Jution');
    });
    const request = controller.expectOne(`${expectedUrl}`);
    request.flush(dummyUser);
    expect(request.request.method).toBe('POST');
  })
});


