import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NavbarItem } from '../navbar-item.model';
import { NavbarService } from '../navbar.service';
import { Observable, Subject } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { navbarExpansion } from '../navbar-expansion-animation';
import { Router, NavigationStart } from '@angular/router';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'matx-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.scss'],
  animations: [navbarExpansion]
})
export class NavbarContainerComponent implements OnInit, OnDestroy {
  @Input() navItems?: NavbarItem[];
  @Input() autoClose?: boolean;
  private unsubscribe$ = new Subject();
  handset$: Observable<boolean>;
  tablet$: Observable<boolean>;
  hideNav$: Observable<boolean>;
  expandedWidth = '256px';

  constructor(
    private navbarService: NavbarService,
    private breakpointObserver: BreakpointObserver,
    private router: Router) {
    this.handset$ = this.navbarService.handset$;
    this.tablet$ = this.navbarService.tablet$;
    this.hideNav$ = this.navbarService.hideNav$;
  }

  ngOnInit() {
    this._observeBreakpoints();
    this._bindToRouterSubscription();
  }

  ngOnDestroy() {
    this.unsubscribe$.next({});
  }

  private _observeBreakpoints() {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .subscribe(results => {
        if (results.matches &&
          (results.breakpoints[Breakpoints.Small] ||
            results.breakpoints[Breakpoints.Medium])) {
          this.navbarService.setHideNav(true);
          this.navbarService.setTablet(true);
          this.navbarService.setHandset(false);
          this.expandedWidth = '256px';
        } else if (results.matches && results.breakpoints[Breakpoints.XSmall]) {
          this.navbarService.setHideNav(true);
          this.navbarService.setTablet(false);
          this.navbarService.setHandset(true);
          this.expandedWidth = '80%';
        } else {
          this.navbarService.setTablet(false);
          this.navbarService.setHandset(false);
          this.navbarService.setHideNav(false);
          this.expandedWidth = '100%';
        }
      });
  }


  private _bindToRouterSubscription() {
    this.router.events
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(event => event instanceof NavigationStart)
      ).subscribe(() => {
        if (
          (this.navbarService.getHandset() ||
            this.navbarService.getTablet()) &&
          this.autoClose) {
          this.navbarService.setHideNav(true);
        }
      });
  }
}
