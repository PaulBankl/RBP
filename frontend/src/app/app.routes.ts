import { Routes } from '@angular/router';

import { UebersichtComponent } from './pages/uebersicht/uebersicht.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { UmfragenComponent } from './pages/umfragen/umfragen.component';
import { GaestelisteComponent } from './pages/gaesteliste/gaesteliste.component';
import { EinstellungenComponent } from './pages/einstellungen/einstellungen.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'uebersicht',
    pathMatch: 'full'
  },
  {
    path: 'uebersicht',
    component: UebersichtComponent
  },
  {
    path: 'fotos',
    component: FotosComponent
  },
  {
    path: 'umfragen',
    component: UmfragenComponent
  },
  {
    path: 'gaesteliste',
    component: GaestelisteComponent
  },
  {
    path: 'einstellungen',
    component: EinstellungenComponent
  },
  {
    path: '**',
    redirectTo: 'uebersicht'
  }
];
