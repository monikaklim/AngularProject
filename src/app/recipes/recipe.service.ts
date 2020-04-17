import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService{

recipesChanged = new Subject<Recipe[]>();

   private recipes: Recipe[] = [
        new Recipe('Test','test description','https://c0.wallpaperflare.com/preview/40/957/185/canada-calgary-food-healthy-eating.jpg',
        [new Ingredient('meat',2),new Ingredient('bread',1)]),
        new Recipe('Test2','test description2','https://c0.wallpaperflare.com/preview/40/957/185/canada-calgary-food-healthy-eating.jpg',
        [new Ingredient('eggs',3)]),
        new Recipe('Test3','test description3','https://c0.wallpaperflare.com/preview/40/957/185/canada-calgary-food-healthy-eating.jpg',
        [new Ingredient('salt',1),new Ingredient('tomato',1),new Ingredient('salad',2)])
      
      ]

      constructor(private slService:ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(id: number){
        return this.recipes[id];
    }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index:number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }

}