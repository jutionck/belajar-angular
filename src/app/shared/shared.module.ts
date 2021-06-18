import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomeDatePipe } from './pipes/custome-date.pipe';
import { RelativeFromPipe } from './pipes/relative-from.pipe';

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
  ]
})
export class SharedModule { }
