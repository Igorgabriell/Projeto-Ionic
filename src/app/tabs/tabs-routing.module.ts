import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'userForm',
        loadChildren: () => import('../pages/user-form/user-form.module').then(m => m.UserFormPageModule)
      },
      {
        path: 'userForm/:id',
        loadChildren: () => import('../pages/user-form/user-form.module').then(m => m.UserFormPageModule)
      },
      {
        path: 'userEnter',
        loadChildren: () => import('../pages/user-enter/user-enter.module').then(m => m.UserEnterPageModule)
      },
      {
        path: 'userList',
        loadChildren: () => import('../pages/user-list/user-list.module').then(m => m.UserListPageModule)
      },

      {
        path: 'productForm',
        loadChildren: () => import('../pages/product-form/product-form.module').then(m => m.ProductFormPageModule)
      },
      {
        path: 'productPerfil/:id',
        loadChildren: () => import('../pages/product-perfil/product-perfil.module').then(m => m.ProductPerfilPageModule)
      },
      {
        path: 'productList',
        loadChildren: () => import('../pages/product-list/product-list.module').then(m => m.ProductListPageModule)
      },

      {
        path: 'userPerfil/:id',
        loadChildren: () => import('../pages/user-perfil/user-perfil.module').then(m => m.UserPerfilPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/productList',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/productList',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
