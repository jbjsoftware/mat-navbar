import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NavbarItem } from '../navbar-item.model';
import { Observable } from 'rxjs';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'matx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() navItems?: NavbarItem[];
  handset$: Observable<boolean>;
  tablet$: Observable<boolean>;
  hideNav$: Observable<boolean>;

  constructor(
    private navbarService: NavbarService) {
    this.handset$ = this.navbarService.handset$;
    this.tablet$ = this.navbarService.tablet$;
    this.hideNav$ = this.navbarService.hideNav$;
  }

  closeNavbar() {
    this.navbarService.setHideNav(true);
  }
}
