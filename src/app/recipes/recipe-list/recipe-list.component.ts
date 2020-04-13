import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output()  recipeWasSelected = new EventEmitter<Recipe>();

recipes: Recipe[] = [
  new Recipe('Test','test description','https://c0.wallpaperflare.com/preview/40/957/185/canada-calgary-food-healthy-eating.jpg'),
  new Recipe('Test2','test description2','https://c0.wallpaperflare.com/preview/40/957/185/canada-calgary-food-healthy-eating.jpg'),
  new Recipe('Test3','test description3','https://c0.wallpaperflare.com/preview/40/957/185/canada-calgary-food-healthy-eating.jpg'),
  new Recipe('Test4','test description4','https://c0.wallpaperflare.com/preview/40/957/185/canada-calgary-food-healthy-eating.jpg')


]
  constructor() { }

  ngOnInit(): void {
  }

onRecipeSelected(recipe:Recipe){
this.recipeWasSelected.emit(recipe);
}


}
