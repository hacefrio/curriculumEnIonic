import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page',
    loadChildren: () => import('./components/page/page.module').then( m => m.PagePageModule)
  },
  {
    path: 'hobbies',
    loadChildren: () => import('./components/hobbies/hobbies.module').then( m => m.HobbiesPageModule)
  },
  {
    path: 'estudios',
    loadChildren: () => import('./components/estudios/estudios.module').then( m => m.EstudiosPageModule)
  },
  {
    path: 'experiencia',
    loadChildren: () => import('./components/experiencia/experiencia.module').then( m => m.ExperienciaPageModule)
  },
  {
    path: 'habilidades',
    loadChildren: () => import('./components/habilidades/habilidades.module').then( m => m.HabilidadesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
