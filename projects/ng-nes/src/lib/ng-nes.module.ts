import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarComponent } from './avatar/avatar.component';
import { BalloonComponent } from './balloon/balloon.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [
    AvatarComponent,
    BalloonComponent,
    ButtonComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AvatarComponent,
    BalloonComponent,
    ButtonComponent,
    CheckboxComponent
  ]
})
export class NgNesModule {
}
