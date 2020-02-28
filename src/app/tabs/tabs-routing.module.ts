import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "home",
        children: [
          {
            path: "",
            loadChildren: () => import("../home/home.module").then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: "myrecipes",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../my-recipes/my-recipes.module").then(m => m.MyRecipesPageModule)
          }
        ]
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () => import("../tab3/tab3.module").then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: "favourites",
        children: [
          {
            path: "",
            loadChildren: () => import("../fav-list/fav-list.module").then(m => m.FavListPageModule)
          }
        ]
      },
      {
        path: "",
        redirectTo: "/tabs/home",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
