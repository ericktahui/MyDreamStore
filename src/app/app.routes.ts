import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UsersComponent } from './views/users/users.component';
import { ErrorComponent } from './views/error/error.component';
import { SearchComponent } from './views/search/search.component';
import { GeneradorComponent } from './views/generador/generador.component';
import { Genera2Component } from './views/genera2/genera2.component';
import { DinamicoComponent } from './views/dinamico/dinamico.component';
import { EstructuralComponent } from './views/estructural/estructural.component';
import { ExamenComponent } from './views/examen/examen.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path:'search',
    component: SearchComponent
  },
  {
    path:'generador',
    component: GeneradorComponent
  },
  {
    path:'gen2',
    component: Genera2Component
  },
  {
    path:'dinamico',
    component: DinamicoComponent
  },
  {
    path:'estructural',
    component: EstructuralComponent
  },
  {
    path:'examen',
    component: ExamenComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },
  
];

export default RouterModule.forRoot(routes);
