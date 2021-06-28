import { TestBed } from "@angular/core/testing"
import { AppModule } from "./app.module"
import { LandingModule } from "./pages/landings/landing.module"
import { PagesModule } from "./pages/pages.module"
import { TodoModule } from "./pages/todos/todo.module"
import { UsersModule } from "./pages/users/users.module"
import { SharedModule } from "./shared/shared.module"
import TemplateModule from "./template/template.module"

describe('Module', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        SharedModule,
        TemplateModule,
        PagesModule,
        LandingModule,
        TodoModule,
        UsersModule
      ]
    })
  });

  it('initialize AppModule', () => {
    const module = TestBed.inject(AppModule);
    expect(module).toBeTruthy();
  });

  it('initialize SharedModule', () => {
    const module = TestBed.inject(SharedModule);
    expect(module).toBeTruthy();
  });

  it('initialize TemplateModule', () => {
    const module = TestBed.inject(TemplateModule);
    expect(module).toBeTruthy();
  });

  it('initialize PagesModule', () => {
    const module = TestBed.inject(PagesModule);
    expect(module).toBeTruthy();
  });

  it('initialize LandingModule', () => {
    const module = TestBed.inject(LandingModule);
    expect(module).toBeTruthy();
  });

  it('initialize TodoModule', () => {
    const module = TestBed.inject(TodoModule);
    expect(module).toBeTruthy();
  });

  it('initialize UsersModule', () => {
    const module = TestBed.inject(UsersModule);
    expect(module).toBeTruthy();
  });

})