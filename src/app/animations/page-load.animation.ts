import { trigger, transition, style, animate } from '@angular/animations';

export const pageLoadAnimation = trigger('pageLoad', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.95)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' }))
  ])
]);
