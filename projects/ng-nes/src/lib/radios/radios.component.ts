import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from './model/option';

export interface RadiosComponentProps {
  options: Option[];
  groupName: string;
  style: any;
}

@Component({
  selector: 'nes-radios',
  templateUrl: './radios.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadiosComponent implements OnInit {
  @Input() props: RadiosComponentProps;
  @Output() radioSelected: EventEmitter<string> = new EventEmitter<string>();
  currentSelected: string;

  ngOnInit(): void {
    if ((this.props.options && this.props.options.length < 1) || !this.props.options) {
      throw new Error('nes-radios requires at least 1 option');
    }
  }

  onSelect(): void {
    this.radioSelected.emit(this.currentSelected);
  }
}
