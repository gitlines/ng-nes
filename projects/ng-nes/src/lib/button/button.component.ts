import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export interface ButtonComponentProps {
  style: any;
  primary: boolean;
  success: boolean;
  warning: boolean;
  error: boolean;
  disabled: boolean;
}

@Component({
  selector: 'nes-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() props?: ButtonComponentProps;
  @Output() click: EventEmitter<void> = new EventEmitter<void>();
  @Output() hover: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.click.emit();
  }

  onHover(): void {
    this.hover.emit();
  }

  get classList(): any {
    return this.props ? {
      'is-primary': this.props.primary,
      'is-success': this.props.success,
      'is-warning': this.props.warning,
      'is-error': this.props.error,
      'is-disabled': this.props.disabled
    } : {};
  }
}
