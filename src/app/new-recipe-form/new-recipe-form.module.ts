import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NewRecipeFormPageRoutingModule } from "./new-recipe-form-routing.module";

import { NewRecipeFormPage } from "./new-recipe-form.page";
import { ErrorTextComponentModule } from '../components/error-text/error-text.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRecipeFormPageRoutingModule,
    ReactiveFormsModule,
    ErrorTextComponentModule
  ],
  declarations: [NewRecipeFormPage]
})
export class NewRecipeFormPageModule {}
