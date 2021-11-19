import { Component, HostListener } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'matx-navbar-scrim',
  template: '',
  styleUrls: ['./navbar-scrim.component.scss']
})
export class NavbarScrimComponent {

  constructor(private navbarService: NavbarService) { }

  @HostListener('click')
  closeSidenav() {
    this.navbarService.setHideNav(true);
  }

  @HostListener('document:keydown.escape')
  onEscHandler() {
    this.navbarService.setHideNav(true);
  }

}
