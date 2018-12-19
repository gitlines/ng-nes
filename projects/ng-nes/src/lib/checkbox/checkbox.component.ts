import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface CheckboxComponentProps {
  checked: boolean;
  style: any;
}

@Component({
  selector: 'nes-checkbox',
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {
  @Input() props: CheckboxComponentProps;
  @Output() change: EventEmitter<void> = new EventEmitter<void>();

  onChange(): void {
    this.change.emit();
  }
}
