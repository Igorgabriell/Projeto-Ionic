import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'user-form',
    loadChildren: () => import('./pages/user-form/user-form.module').then( m => m.UserFormPageModule)
  },
  {
    path: 'user-enter',
    loadChildren: () => import('./pages/user-enter/user-enter.module').then( m => m.UserEnterPageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./pages/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'produto-form',
    loadChildren: () => import('./pages/produto-form/produto-form.module').then( m => m.ProdutoFormPageModule)
  },
  {
    path: 'produto-list',
    loadChildren: () => import('./pages/produto-list/produto-list.module').then( m => m.ProdutoListPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
