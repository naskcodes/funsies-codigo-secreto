import { Component, Input } from '@angular/core';
import { PageSkeleton } from '../page-skeleton/page-skeleton';

@Component({
  selector: 'app-dracula',
  imports: [PageSkeleton],
  templateUrl: './dracula.html',
  styleUrl: './dracula.scss'
})
export class Dracula {
  @Input() pageSkeleton?: PageSkeleton;
}
