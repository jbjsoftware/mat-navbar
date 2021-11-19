import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NavbarItem } from '../navbar-item.model';
import { matExpansionAnimations } from '@angular/material/expansion';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'matx-nav-collapse-panel',
  templateUrl: './nav-collapse-panel.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [matExpansionAnimations.bodyExpansion, matExpansionAnimations.indicatorRotate]
})
export class NavCollapsePanelComponent {
  @Input() item!: NavbarItem;
  @Input() level = 1;

  constructor(private router: Router, private route: ActivatedRoute) { }

  hasActiveChild(path?: string) {
    if (!path) {
      return false;
    }
    return this.router.isActive(this.router.createUrlTree([path], { relativeTo: this.route }).toString(), false);
  }
}
