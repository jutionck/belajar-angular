// import { HttpClientTestingModule } from "@angular/common/http/testing";
// import { ComponentFixture, getTestBed, TestBed } from "@angular/core/testing";
// import { ActivatedRoute, RouterModule } from "@angular/router";
// import { RouterTestingModule } from "@angular/router/testing";
// import { Observable } from "rxjs";
// import { UserService } from "../../service/user.service";
// import { ListUserComponent } from "./list-user.component";

// describe('ListUserComponent', () => {
//   let component: ListUserComponent;
//   let userService: UserService;

//   beforeEach(async () => {

//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, RouterTestingModule],
//       providers: [
//         ListUserComponent,
//         {
//           provide: UserService
//         }
//       ]
//     });

//     component = TestBed.inject(ListUserComponent);
//     userService = TestBed.inject(UserService);
//   });

//   it('should not have user list after construction', () => {
//     expect(component.users).toEqual([]);
//   });

//   it("should showing users after Angular calls ngOnInit with observable", () => {
//     const dummyUsers = [
//       {
//         "id": 1,
//         "email": "george.bluth@reqres.in",
//         "first_name": "George",
//         "last_name": "Bluth",
//         "avatar": "https://reqres.in/img/faces/1-image.jpg"
//       },
//       {
//         "id": 2,
//         "email": "janet.weaver@reqres.in",
//         "first_name": "Janet",
//         "last_name": "Weaver",
//         "avatar": "https://reqres.in/img/faces/2-image.jpg"
//       },
//       {
//         "id": 3,
//         "email": "emma.wong@reqres.in",
//         "first_name": "Emma",
//         "last_name": "Wong",
//         "avatar": "https://reqres.in/img/faces/3-image.jpg"
//       },
//       {
//         "id": 4,
//         "email": "eve.holt@reqres.in",
//         "first_name": "Eve",
//         "last_name": "Holt",
//         "avatar": "https://reqres.in/img/faces/4-image.jpg"
//       },
//       {
//         "id": 5,
//         "email": "charles.morris@reqres.in",
//         "first_name": "Charles",
//         "last_name": "Morris",
//         "avatar": "https://reqres.in/img/faces/5-image.jpg"
//       },
//       {
//         "id": 6,
//         "email": "tracey.ramos@reqres.in",
//         "first_name": "Tracey",
//         "last_name": "Ramos",
//         "avatar": "https://reqres.in/img/faces/6-image.jpg"
//       }
//     ];
//     component.ngOnInit();
//     const userList = userService.getAll(1);
//     userList.subscribe((users: any) => {
//       component.users = users;
//       expect(component.users).toEqual(dummyUsers);
//       // expect(comp.tasks.length).toEqual(tasks.length);
//     });
//   });
// });