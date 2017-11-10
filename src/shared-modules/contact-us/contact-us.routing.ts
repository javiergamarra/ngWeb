import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us.component'

export const routes: Routes = [
  {path: '', component: ContactUsComponent},
];

export const CONTACT_ROUTES = RouterModule.forChild(routes);
