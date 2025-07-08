import { Routes } from '@angular/router';
import { App } from './app';
import { Lockscreen } from './lockscreen/lockscreen';

export const routes: Routes = [
    { path: 'home', component:  App },
    { path: 'lockscreen', component: Lockscreen },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
];