import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomeDatePipe } from './pipes/custome-date.pipe';
import { RelativeFromPipe } from './pipes/relative-from.pipe';
import { RouteGuard } from './guards/route-guards';

const PIPES = [
  CustomeDatePipe, RelativeFromPipe
]

@NgModule({
  declarations: [
    ...PIPES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...PIPES
  ],
  providers: [
    RouteGuard
  ]
})
export class SharedModule { }
