import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HomePageRoutingModule } from "./home-routing.module";

import { HomePage } from "./home.page";
import { FeaturedCardComponent } from "../components/featured-card/featured-card.component";
import { RecipeCardComponentModule } from "../components/recipe-card/recipe-card.component.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RecipeCardComponentModule
  ],
  declarations: [HomePage, FeaturedCardComponent]
})
export class HomePageModule {}
