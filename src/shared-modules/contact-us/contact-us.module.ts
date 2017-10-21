import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component' 
import { CONTACT_ROUTES } from './contact-us.routing' 

@NgModule({
  imports: [
    CommonModule,
    CONTACT_ROUTES
  ],
  declarations: [ContactUsComponent],
  exports:[ContactUsComponent]
})
export class ContactUsModule { }
