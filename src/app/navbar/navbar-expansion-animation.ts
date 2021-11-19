import {
    trigger,
    state,
    style,
    transition,
    animate
  } from '@angular/animations';
  
  export const navbarExpansion = trigger('navbarExpansion', [
    state('expanded', style({ width: '{{expandedWidth}}' }), {
      params: { expandedWidth: '256px' }
    }),
    state('collapsed', style({ width: '0px', display: 'none' })),
    transition('expanded => collapsed', [
      animate('100ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    ]),
    transition('collapsed => expanded', [
      style({ width: '0px', display: 'flex' }),
      animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    ]),
    state('fullscreen', style({ width: '100%' })),
    transition('*=> fullscreen', []),
  ]);
  