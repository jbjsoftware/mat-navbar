import { Component, Input } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'matx-navbar-toggler',
  templateUrl: './navbar-toggler.component.html',
  styleUrls: ['./navbar-toggler.component.scss']
})
export class NavbarTogglerComponent {
  @Input() icon = 'menu';
  handset$: Observable<boolean>;
  tablet$: Observable<boolean>;

  constructor(private navbarService: NavbarService) {
    this.handset$ = this.navbarService.handset$;
    this.tablet$ = this.navbarService.tablet$;
  }

  toggleNav() {
    this.navbarService.setHideNav(!this.navbarService.getHideNav());
  }

}
