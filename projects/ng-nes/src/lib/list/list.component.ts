import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface ListComponentProps {
  solid: boolean;
  style?: any;
}

@Component({
  selector: 'nes-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() props: ListComponentProps;

  get classList(): any {
    return {
      'is-circle': !this.props.solid,
      'is-disc': this.props.solid
    };
  }
}
