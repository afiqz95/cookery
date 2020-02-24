import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRecipeFormPageRoutingModule } from './new-recipe-form-routing.module';

import { NewRecipeFormPage } from './new-recipe-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRecipeFormPageRoutingModule
  ],
  declarations: [NewRecipeFormPage]
})
export class NewRecipeFormPageModule {}
