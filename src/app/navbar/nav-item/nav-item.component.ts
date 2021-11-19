import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NavbarItem } from '../navbar-item.model';

@Component({
  selector: 'matx-nav-item',
  templateUrl: './nav-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NavItemComponent {
  @Input() item!: NavbarItem;
}
