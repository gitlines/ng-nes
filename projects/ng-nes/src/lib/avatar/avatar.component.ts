import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface AvatarComponentProps {
  src: string;
  alt: string;
  style?: any;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  rounded?: boolean;
}

@Component({
  selector: 'nes-avatar',
  templateUrl: './avatar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
  @Input() props: AvatarComponentProps;

  get classList(): any {
    return {
      'is-small': this.props.small,
      'is-medium': this.props.medium,
      'is-large': this.props.large,
      'is-rounded': this.props.rounded
    };
  }
}
