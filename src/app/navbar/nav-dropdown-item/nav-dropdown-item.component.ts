import { Component, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarItem } from '../navbar-item.model';

@Component({
  selector: 'matx-nav-dropdown-item',
  templateUrl: './nav-dropdown-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NavDropdownItemComponent {
  @Input() items?: NavbarItem[];
  @ViewChild('childMenu')childMenu!: MatMenu;
  @ViewChild(NavDropdownItemComponent) childComponentMenu!: NavDropdownItemComponent;

  constructor(private router: Router, private route: ActivatedRoute) { }

  hasActiveChild(path?: string) {
    if (!path) {
      return false;
    }
    return this.router.isActive(this.router.createUrlTree([path], { relativeTo: this.route }).toString(), false);
  }

}
