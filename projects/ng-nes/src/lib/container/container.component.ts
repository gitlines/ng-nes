import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface ContainerComponentProps {
  title: string;
  dark: boolean;
  rounded: boolean;
  centered: boolean;
  style: any;
}

@Component({
  selector: 'nes-container',
  templateUrl: './container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent {
  @Input() props?: ContainerComponentProps;

  get classList(): any {
    return this.props ? {
      'with-title': !!this.props.title,
      'is-dark': this.props.dark,
      'is-rounded': this.props.rounded,
      'is-centered': this.props.centered
    } : {};
  }
}
