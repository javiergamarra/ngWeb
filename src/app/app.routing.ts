import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
//import {ContactUsModule} from '../shared-modules/contact-us/contact-us.module';
//import { BodyModule } from '../shared-modules/body/body.module'

import { AppComponent } from './app.component';


export const routes: Routes = [
        // { path: '', redirectTo: 'index', pathMatch: 'full' },
        //{ path: 'index', component: AppComponent},
        { path: 'index', loadChildren: '../shared-modules/body/body.module#BodyModule'},
        { path: 'contact-us',loadChildren: '../shared-modules/contact-us/contact-us.module#ContactUsModule'},
        //{ path:'**', redirectTo: 'index'}
];
export const RUTAS_APP = RouterModule.forRoot(routes);