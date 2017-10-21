import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { BODY_ROUTES } from './body.routing'

@NgModule({
  imports: [
    CommonModule,
    BODY_ROUTES
  ],
  declarations: [BodyComponent],
  entryComponents:[BodyComponent],
  exports: [BodyComponent]
})
export class BodyModule { }
