import { NgModule } from '@angular/core';
import { AvatarComponent } from './avatar/avatar.component';
import { CommonModule } from '@angular/common';
import { BalloonComponent } from './balloon/balloon.component';

@NgModule({
  declarations: [
    AvatarComponent,
    BalloonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AvatarComponent,
    BalloonComponent
  ]
})
export class NgNesModule {
}
