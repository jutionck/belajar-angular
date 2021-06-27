import { Directive, HostBinding, Input } from '@angular/core';

enum ButtonStyle {
  default = 'btn btn',
  outline = 'btn btn-outline',
  link = 'btn btn-link'
}
enum ButtonSize {
  default = '',
  small = 'btn-sm',
  large = 'btn-lg'
}


@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective {

  @Input() color: string = 'primary';
  @Input() buttonStyle: 'default' | 'outline' | 'link' = 'default';
  @Input() size: 'default' | 'small' | 'large' = 'default';

  @HostBinding('class')
  get applyStyles(): string {
    const defaultStyle: ButtonStyle = ButtonStyle[this.buttonStyle];
    const defaultSize: ButtonSize = ButtonSize[this.size];
    const defaultColor: string = this.color
    return `mx-1 ${defaultStyle}-${defaultColor} ${defaultSize}`
  }


}
