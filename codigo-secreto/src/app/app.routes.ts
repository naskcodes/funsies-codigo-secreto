import { Routes } from '@angular/router';
import { App } from './app';
import { Lockscreen } from './lockscreen/lockscreen';

export const routes: Routes = [
    { path: 'lockscreen', component: Lockscreen },
    { path: '', redirectTo: '/lockscreen', pathMatch: 'full'},
];