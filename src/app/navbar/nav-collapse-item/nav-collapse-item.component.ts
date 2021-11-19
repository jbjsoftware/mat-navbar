import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NavbarItem } from '../navbar-item.model';

@Component({
  selector: 'matx-nav-collapse-item',
  templateUrl: './nav-collapse-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NavCollapseItemComponent {
  @Input() items?: NavbarItem[];
  @Input() level = 1;
}
