import { Injectable } from "@angular/core";
import { BaseApiService } from "./base-api.service";
import { RecipeDetail } from "../interface/recipe-detail";
import { StorageService } from "../services/storage.service";
import { RecipeStep } from "../interface/recipe-step";
import { RecipeIngredient } from "../interface/recipe-ingredient";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  constructor(private baseApi: BaseApiService, private storage: StorageService) {}

  public async insertRecipeDetail(item: RecipeDetail) {
    const userId = await this.storage.getUserId();
    item.userId = userId;
    return await this.baseApi.post("/recipeendpoint", item);
  }

  public async insertRecipeStepMultiple(items: Array<RecipeStep>, recipeId?: string) {
    for (const item of items) {
      item.recipeId = recipeId;
    }

    return await this.baseApi.post("/RecipeStepEndpoint/multiple", items);
  }

  public async insertRecipeIngredientMultiple(items: Array<RecipeIngredient>, recipeId?: string) {
    for (const item of items) {
      item.recipeId = recipeId;
    }

    return await this.baseApi.post("/RecipeIngredientEndpoint/multiple", items);
  }
}
