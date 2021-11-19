import { Component } from '@angular/core';
import { NavbarItem } from './navbar/navbar-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navItems: NavbarItem[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      path: 'dashboard'
    },
    {
      label: 'Administration',
      icon: 'settings_input_svideo',
      path: '/navbar-example/administartion',
      items: [
        {
          label: 'Summary With A long Label for Some Reason',
          icon: 'call',
          path: '/navbar-example/administartion/summary'
        },
        {
          label: 'Search',
          icon: 'search',
          path: '/navbar-example/administartion/search'
        },
        {
          label: 'Security',
          icon: 'security',
          path: '/navbar-example/administartion/security'
        },
        {
          label: 'Settings',
          icon: 'settings',
          path: '/navbar-example/administartion/settings'
        }
      ]
    },
    {
      label: 'Users',
      icon: 'people',
      path: 'users'
    },
    {
      label: 'Actions',
      icon: 'memory',
      path: 'actions'
    },
    {
      label: 'Notifications',
      icon: 'notifications',
      path: 'notifications'
    },
    {
      label: 'Applications',
      icon: 'poll',
      path: '/navbar-example/applications',
      items: [
        {
          label: 'Comp One',
          icon: 'public',
          path: '/navbar-example/applications/appcompone'
        },
        {
          label: 'Comp Two',
          icon: 'school',
          path: '/navbar-example/applications/appcomptwo'
        },
        {
          label: 'Properties',
          icon: 'pages',
          path: '/navbar-example/applications/properties',
          items: [
            {
              label: 'Prop One',
              path: '/navbar-example/applications/properties/propone'
            },
            {
              label: 'Prop Two',
              path: '/navbar-example/applications/properties/proptwo'
            },
            {
              label: 'Prop Three',
              path: '/navbar-example/applications/properties/propthree'
            }
          ]
        }
      ]
    }
  ];
}
