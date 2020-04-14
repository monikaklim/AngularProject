import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{
recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('Test','test description','https://c0.wallpaperflare.com/preview/40/957/185/canada-calgary-food-healthy-eating.jpg'),
        new Recipe('Test2','test description2','https://c0.wallpaperflare.com/preview/40/957/185/canada-calgary-food-healthy-eating.jpg'),
        new Recipe('Test3','test description3','https://c0.wallpaperflare.com/preview/40/957/185/canada-calgary-food-healthy-eating.jpg'),
        new Recipe('Test4','test description4','https://c0.wallpaperflare.com/preview/40/957/185/canada-calgary-food-healthy-eating.jpg')
      ]

      getRecipes(){
          return this.recipes.slice();
      }
}