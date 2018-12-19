import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface BalloonComponentProps {
  style: any;
  fromLeft: boolean;
  fromRight: boolean;
}

@Component({
  selector: 'nes-balloon',
  templateUrl: './balloon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalloonComponent {
  @Input() props?: BalloonComponentProps;

  get classList(): any {
    return this.props ? {
      'from-left': this.props.fromLeft,
      'from-right': this.props.fromRight
    } : {};
  }
}
