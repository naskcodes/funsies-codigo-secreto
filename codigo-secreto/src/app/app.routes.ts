import { Routes } from '@angular/router';
import { Hitman } from './hitman/hitman';
import { Lockscreen } from './lockscreen/lockscreen';

export const routes: Routes = [
    { path: 'lockscreen', component: Lockscreen },
    { path: 'hitman', component: Hitman },
    { path: '', redirectTo: '/lockscreen', pathMatch: 'full'},
];