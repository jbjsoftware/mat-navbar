import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import {MatToolbarModule} from '@angular/material/toolbar';


import { NavbarService } from './navbar.service';
import { NavbarContainerComponent } from './navbar-container/navbar-container.component';
import { NavbarContentComponent } from './navbar-content/navbar-content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarListComponent } from './navbar-list/navbar-list.component';
import { NavbarTogglerComponent } from './navbar-toggler/navbar-toggler.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavDropdownItemComponent } from './nav-dropdown-item/nav-dropdown-item.component';
import { NavCollapseItemComponent } from './nav-collapse-item/nav-collapse-item.component';
import { NavDropdownComponent } from './nav-dropdown/nav-dropdown.component';
import { NavCollapsePanelComponent } from './nav-collapse-panel/nav-collapse-panel.component';
import { NavbarScrimComponent } from './navbar-scrim/navbar-scrim.component';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatRippleModule,
    MatTooltipModule,
    CdkAccordionModule,
    MatToolbarModule,
    RouterModule
  ],
  declarations: [
    NavbarContainerComponent,
    NavbarContentComponent,
    NavbarComponent,
    NavbarListComponent,
    NavbarTogglerComponent,
    NavItemComponent,
    NavDropdownItemComponent,
    NavCollapseItemComponent,
    NavDropdownComponent,
    NavCollapsePanelComponent,
    NavbarScrimComponent
  ],
  exports: [
    NavbarContainerComponent,
    NavbarContentComponent,
    NavbarComponent,
    NavbarListComponent,
    NavbarTogglerComponent,
    NavItemComponent,
    NavDropdownItemComponent,
    NavCollapseItemComponent,
    NavDropdownComponent,
    NavCollapsePanelComponent,
    NavbarScrimComponent
  ],
  providers: [
    NavbarService
  ]
})
export class NavbarModule { }
