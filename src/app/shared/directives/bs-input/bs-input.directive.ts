import { Directive, HostBinding, Input } from '@angular/core';


enum InputSize {
  small = 'form-control-sm',
  large = 'form-control-lg'
}

@Directive({
  selector: '[appBsInput]'
})
export class BsInputDirective {

  @Input() inputSize: 'small' | 'large';

  @HostBinding('class')
  get applyClasses(): string {
    let classes = 'form-control';

    if (['small', 'large'].includes(this.inputSize)) {
      classes = `${classes} ${InputSize[this.inputSize]}`;
    }

    return classes;
  }


}
