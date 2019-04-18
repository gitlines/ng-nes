import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AvatarComponent } from './avatar/avatar.component';
import { BalloonComponent } from './balloon/balloon.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ContainerComponent } from './container/container.component';
import { ControllerIconComponent } from './controller-icon/controller-icon.component';
import { IconComponent } from './icon/icon.component';
import { ListComponent } from './list/list.component';
import { ProgressComponent } from './progress/progress.component';
import { RadiosComponent } from './radios/radios.component';
import { SpriteComponent } from './sprite/sprite.component';

@NgModule({
  declarations: [
    AvatarComponent,
    BalloonComponent,
    ButtonComponent,
    CheckboxComponent,
    ContainerComponent,
    ControllerIconComponent,
    IconComponent,
    ListComponent,
    ProgressComponent,
    RadiosComponent,
    SpriteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AvatarComponent,
    BalloonComponent,
    ButtonComponent,
    CheckboxComponent,
    ContainerComponent,
    ControllerIconComponent,
    IconComponent,
    ListComponent,
    ProgressComponent,
    RadiosComponent,
    SpriteComponent
  ]
})
export class NgNesModule {
}
