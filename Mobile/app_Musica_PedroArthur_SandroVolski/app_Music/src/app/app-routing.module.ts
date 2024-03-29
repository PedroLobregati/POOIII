import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./view/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./view/cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'atualizar/:indice',
    loadChildren: () => import('./view/atualizar/atualizar.module').then( m => m.AtualizarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }