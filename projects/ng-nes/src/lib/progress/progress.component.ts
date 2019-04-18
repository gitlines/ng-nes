import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface ProgressComponentProps {
  value: number;
  max: number;
  primary: boolean;
  success: boolean;
  warning: boolean;
  error: boolean;
  pattern: boolean;
  style?: any;
}

@Component({
  selector: 'nes-progress',
  templateUrl: './progress.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressComponent {
  @Input() props: ProgressComponentProps;

  get classList(): any {
    return {
      'is-primary': this.props.primary,
      'is-success': this.props.success,
      'is-warning': this.props.warning,
      'is-error': this.props.error,
      'is-pattern': this.props.pattern
    };
  }
}
