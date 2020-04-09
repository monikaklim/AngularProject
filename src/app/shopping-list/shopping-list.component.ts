import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
new Ingredient('apples',5),
new Ingredient('tomatoes',8),
new Ingredient('milk',1)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
