import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface IconComponentProps {
  icon:
    | 'heart'
    | 'star'
    | 'like'
    | 'twitter'
    | 'facebook'
    | 'github'
    | 'youtube'
    | 'google'
    | 'medium'
    | 'twitch'
    | 'reddit'
    | 'whatsapp'
    | 'gmail'
    | 'linkedin'
    | 'close'
    | 'trophy';
  small: boolean;
  medium: boolean;
  large: boolean;
  empty: boolean;
  transparent: boolean;
  half: boolean;
  style: any;
}

@Component({
  selector: 'nes-icon',
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input() props: IconComponentProps;

  get classList(): any {
    return {
      'is-small': this.props.small,
      'is-medium': this.props.medium,
      'is-large': this.props.large,
      'is-transparent': this.props.transparent,
      'is-empty': this.props.empty,
      'is-half': this.props.half
    };
  }
}
