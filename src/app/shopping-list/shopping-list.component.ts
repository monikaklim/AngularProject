import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private igChangeSubcription: Subscription;
  ingredients: Ingredient[];
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
   this.igChangeSubcription= this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[])  => {
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy(){
    this.igChangeSubcription.unsubscribe();
  }
 
  onEditItem(index:number){
    this.slService.startedEditing.next(index);
  }



}
