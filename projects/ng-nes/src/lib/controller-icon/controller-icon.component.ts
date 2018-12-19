import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface ControllerIconComponentProps {
  controller: 'snes' | 'snes-js' | 'nes' | 'nes-jp';
  style?: any;
}

@Component({
  selector: 'nes-controller-icon',
  templateUrl: './controller-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControllerIconComponent {
  @Input() props: ControllerIconComponentProps;
}
