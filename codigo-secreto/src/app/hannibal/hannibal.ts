import { Component, Input } from '@angular/core';
import { PageSkeleton } from '../page-skeleton/page-skeleton';

@Component({
  selector: 'app-hannibal',
  imports: [PageSkeleton],
  templateUrl: './hannibal.html',
  styleUrl: './hannibal.scss'
})
export class Hannibal {
  @Input() pageSkeleton?: PageSkeleton;
}
