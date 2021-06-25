import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';



@NgModule({
  declarations: [LandingComponent, CarouselComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
