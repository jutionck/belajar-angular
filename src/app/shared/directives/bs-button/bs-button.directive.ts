import { Directive, HostBinding, Input } from '@angular/core';

enum ButtonSize {
  default = 'btn',
  large = 'btn btn-lg',
  small = 'btn btn-sm'
}

enum ButtonStyle {
  default = 'btn',
  link = 'btn-link',
  outline = 'btn-outline'
}

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective {

  @Input() size: 'large' | 'small';

  @Input() color: 'primary' | 'secondary' | 'light' | 'dark' | 'success' | 'info' | 'danger' | 'warning' = 'primary';

  @Input() buttonStyle: 'link' | 'outline';

  @HostBinding('class')
  get applyStyles(): string {
    let appliedColor = 'primary';
    let appliedSize: ButtonSize = ButtonSize.default;
    let appliedStyle: ButtonStyle = ButtonStyle.default;

    if (['large', 'small'].includes(this.size)) {
      appliedSize = ButtonSize[this.size];
    }

    if (['link', 'outline'].includes(this.buttonStyle)) {
      appliedStyle = ButtonStyle[this.buttonStyle];
    }

    if (['primary', 'secondary', 'light', 'dark', 'success', 'info', 'danger', 'warning'].includes(this.color)) {
      appliedColor = this.color;
    }

    return `mx-1 ${appliedSize} ${appliedStyle}-${appliedColor}`;
  }

}
