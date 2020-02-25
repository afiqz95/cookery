import { NgModule } from "@angular/core";
import { RecipeCardComponent } from "./recipe-card.component";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [RecipeCardComponent],
  declarations: [RecipeCardComponent],
  providers: []
})
export class RecipeCardComponentModule {}
