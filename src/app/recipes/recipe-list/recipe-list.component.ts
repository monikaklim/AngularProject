import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Test','test description','https://c0.wallpaperflare.com/preview/40/957/185/canada-calgary-food-healthy-eating.jpg'),
  new Recipe('Test','test description','https://c0.wallpaperflare.com/preview/40/957/185/canada-calgary-food-healthy-eating.jpg'),
  new Recipe('Test','test description','https://c0.wallpaperflare.com/preview/40/957/185/canada-calgary-food-healthy-eating.jpg'),
  new Recipe('Test','test description','https://c0.wallpaperflare.com/preview/40/957/185/canada-calgary-food-healthy-eating.jpg')


]
  constructor() { }

  ngOnInit(): void {
  }

}
