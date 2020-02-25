import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";
import { FeaturedCardComponent } from "../components/featured-card/featured-card.component";
import { RecipeCardComponent } from "../components/recipe-card/recipe-card.component";
import { RecipeCardComponentModule } from "../components/recipe-card/recipe-card.component.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: "", component: Tab1Page }]),
    RecipeCardComponentModule
  ],
  declarations: [Tab1Page, FeaturedCardComponent]
})
export class Tab1PageModule {}
