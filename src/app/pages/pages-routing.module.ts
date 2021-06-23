import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./components/landings/landing.module')
          .then((m) => m.LandingModule) // Lazy load
      },
      {
        path: 'todos',
        loadChildren: () => import('./components/todos/todo.module')
          .then((m) => m.TodoModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./components/users/users.module')
          .then((m) => m.UsersModule)
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }