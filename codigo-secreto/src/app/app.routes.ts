import { Routes } from '@angular/router';
import { Hitman } from './hitman/hitman';
import { Lockscreen } from './lockscreen/lockscreen';
import { PageSkeleton } from './page-skeleton/page-skeleton';
import { Hellsing } from './hellsing/hellsing';
import { Hannibal } from './hannibal/hannibal';
import { Dracula } from './dracula/dracula';

export const routes: Routes = [
    { path: 'lockscreen', component: Lockscreen },
    { path: 'hitman', component: Hitman },
    { path: 'dracula', component: Dracula },
    { path: 'hannibal', component: Hannibal },
    { path: 'hellsing', component: Hellsing },
    { path: 'page-skeleton', component: PageSkeleton },
    { path: '', redirectTo: '/lockscreen', pathMatch: 'full'},
];