import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'new-recipe-form',
    loadChildren: () => import('./new-recipe-form/new-recipe-form.module').then( m => m.NewRecipeFormPageModule)
  },
  {
    path: 'fav-list',
    loadChildren: () => import('./fav-list/fav-list.module').then( m => m.FavListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
