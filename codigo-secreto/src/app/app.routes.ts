import { Routes } from '@angular/router';
import { Hitman } from './hitman/hitman';
import { Lockscreen } from './lockscreen/lockscreen';
import { PageSkeleton } from './page-skeleton/page-skeleton';
import { Hellsing } from './hellsing/hellsing';

export const routes: Routes = [
    { path: 'lockscreen', component: Lockscreen },
    { path: 'hitman', component: Hitman },
    { path: 'hellsing', component: Hellsing },
    { path: 'page-skeleton', component: PageSkeleton },
    { path: '', redirectTo: '/lockscreen', pathMatch: 'full'},
];