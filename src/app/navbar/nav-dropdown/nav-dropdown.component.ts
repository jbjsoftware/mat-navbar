import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavbarItem } from '../navbar-item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { NavDropdownItemComponent } from '../nav-dropdown-item/nav-dropdown-item.component';

@Component({
  selector: 'matx-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NavDropdownComponent {
  @Input() item!: NavbarItem;
  @ViewChild(NavDropdownItemComponent) childComponentMenu!: NavDropdownItemComponent;

  constructor(private router: Router, private route: ActivatedRoute) { }

  hasActiveChild(path?: string) {
    if (!path) {
      return false;
    }
    return this.router.isActive(this.router.createUrlTree([path], { relativeTo: this.route }).toString(), false);
  }

  triggerChildMenu(menuTrigger: MatMenuTrigger, menu: any){
    menuTrigger.menu = menu.childMenu;
    menuTrigger.toggleMenu();
  }
}
