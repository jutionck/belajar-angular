import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/landing/landing.module')
      .then((m) => m.LandingModule) // Lazy load
  },
  {
    path: 'todos',
    loadChildren: () => import('./components/todo/todo.module')
      .then((m) => m.TodoModule)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }