import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: "new-recipe-form",
    loadChildren: () =>
      import("./new-recipe-form/new-recipe-form.module").then(m => m.NewRecipeFormPageModule)
  },
  {
    path: "fav-list",
    loadChildren: () => import("./fav-list/fav-list.module").then(m => m.FavListPageModule)
  },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "my-recipes",
    loadChildren: () => import("./my-recipes/my-recipes.module").then(m => m.MyRecipesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
