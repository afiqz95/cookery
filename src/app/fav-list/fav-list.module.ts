import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FavListPageRoutingModule } from "./fav-list-routing.module";

import { FavListPage } from "./fav-list.page";
import { RecipeCardComponent } from "../components/recipe-card/recipe-card.component";
import { RecipeCardComponentModule } from "../components/recipe-card/recipe-card.component.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavListPageRoutingModule,
    RecipeCardComponentModule
  ],
  declarations: [FavListPage]
})
export class FavListPageModule {}
