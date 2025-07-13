import { Component, Input } from '@angular/core';
import { PageSkeleton } from '../page-skeleton/page-skeleton';

@Component({
  selector: 'app-hitman',
  imports: [PageSkeleton],
  templateUrl: './hitman.html',
  styleUrl: './hitman.scss'
})
export class Hitman {
  @Input() pageSkeleton?: PageSkeleton;
}