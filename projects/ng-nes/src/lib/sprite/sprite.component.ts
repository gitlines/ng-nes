import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface SpriteComponentProps {
  sprite:
    | 'ash'
    | 'bcrikko'
    | 'bulbasaur'
    | 'charmander'
    | 'kirby'
    | 'mario'
    | 'octocat'
    | 'phone'
    | 'pokeball'
    | 'smartphone'
    | 'squirtle';
  style?: any;
}

@Component({
  selector: 'nes-sprite',
  templateUrl: './sprite.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpriteComponent {
  @Input() props: SpriteComponentProps;
}
