import { Routes } from '@angular/router';

// Layouts
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { MainLayout } from './layouts/main-layout/main-layout';

// Auth
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';

// Pages
import { OverviewComponent } from './pages/overview/overview';
import { PhotosComponent } from './pages/photos/photos';
import { PollsComponent } from './pages/polls/polls';
import { GuestListComponent } from './pages/guest-list/guest-list';
import { SettingsComponent } from './pages/settings/settings';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },

  // Auth routes
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },

  // User routes
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'photos',
        component: PhotosComponent
      },
      {
        path: 'polls',
        component: PollsComponent
      },
      {
        path: 'guest-list',
        component: GuestListComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'overview'
  }
]