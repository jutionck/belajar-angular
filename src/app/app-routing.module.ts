import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module')
      .then(m => m.LoginModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/pages.module')
      .then((m) => m.PagesModule) // Lazy load
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }