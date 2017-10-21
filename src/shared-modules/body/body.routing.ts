import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body.component'

export const routes: Routes = [
  {path: '', component: BodyComponent},
];
export const BODY_ROUTES = RouterModule.forChild(routes);
