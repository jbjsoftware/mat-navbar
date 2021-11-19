import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NavbarItem } from '../navbar-item.model';

@Component({
  selector: 'matx-navbar-list',
  templateUrl: './navbar-list.component.html',
  styleUrls: ['./navbar-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarListComponent {
  @Input() navItems?: NavbarItem[];
  @Input() smallScreen?: boolean | null;
}
