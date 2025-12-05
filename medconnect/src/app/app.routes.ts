import { Routes } from '@angular/router';
import { HomeMain } from './features/home/home-main/home-main';

export const routes: Routes = [
  { path: '', component: HomeMain },
  
  // ONBOARDING
  {
    path: 'onboarding',
    loadComponent: () =>
      import('./features/onboarding/onboarding/onboarding')
        .then(m => m.Onboarding)
  },
  {
    path: 'onboarding/agendar',
    loadComponent: () =>
      import('./features/citas/agendar/agendar')
        .then(m => m.Agendar)
  },

  // AUTH
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login')
        .then(m => m.Login)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register')
        .then(m => m.Register)
  },

  // HOME
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home-main/home-main')
        .then(m => m.HomeMain)
  },

  // CITAS
  {
    path: 'citas/agendar',
    loadComponent: () =>
      import('./features/citas/agendar/agendar')
        .then(m => m.Agendar)
  },
  {
    path: 'agendar',
    loadComponent: () =>
      import('./features/citas/agendar/agendar')
        .then(m => m.Agendar)
  },
  {
    path: 'citas/confirmar',
    loadComponent: () =>
      import('./features/citas/confirmar/confirmar')
        .then(m => m.Confirmar)
  },

  // VIDEOLLAMADA
  {
    path: 'videollamada',
    loadComponent: () =>
      import('./features/videollamada/videocall/videocall')
        .then(m => m.Videocall)
  },

  // HISTORIAL
  {
    path: 'historial',
    loadComponent: () =>
      import('./features/historial/historial/historial')
        .then(m => m.Historial)
  },

  { path: '**', redirectTo: 'onboarding' },
];
