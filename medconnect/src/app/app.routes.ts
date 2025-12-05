import { Routes } from '@angular/router';
import { HomeMain } from '../app/features/home/home-main/home-main';

export const routes: Routes = [
  { path: '', component: HomeMain },
  // ONBOARDING
  {
    path: 'onboarding',
    loadComponent: () =>
      import('../app/features/onboarding/onboarding/onboarding')
        .then(m => m.Onboarding)
  },

  // AUTH
  {
    path: 'login',
    loadComponent: () =>
      import('../app/features/auth/login/login')
        .then(m => m.Login)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('../app/features/auth/register/register')
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
      import('../app/features/citas/agendar/agendar')
        .then(m => m.Agendar)
  },
  {
    path: 'citas/confirmar',
    loadComponent: () =>
      import('../app/features/citas/confirmar/confirmar')
        .then(m => m.Confirmar)
  },

  // VIDEOLLAMADA
  {
    path: 'videollamada',
    loadComponent: () =>
      import('../app/features/videollamada/videocall/videocall')
        .then(m => m.Videocall)
  },

  // HISTORIAL
  {
    path: 'historial',
    loadComponent: () =>
      import('../app/features/historial/historial/historial')
        .then(m => m.Historial)
  },

  { path: '**', redirectTo: 'onboarding' },
];
