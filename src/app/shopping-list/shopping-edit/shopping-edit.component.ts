import { NgForm } from '@angular/forms';
import {Subscription} from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, OnDestroy,ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
// @ViewChild('nameInput', {static:false}) nameInputRef: ElementRef;
// @ViewChild('amountInput', {static:false}) amountInputRef: ElementRef;
@ViewChild('f', {static:false} ) slForm:NgForm;
subscription: Subscription;
editMode = false;
editedItemIndex:number;
editedItem: Ingredient;

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.slService.startedEditing.subscribe(
      (index: number) =>{
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({name: this.editedItem.name, amount: this.editedItem.amount})
      }
    );
  }

ngOnDestroy(){
  this.subscription.unsubscribe();
}

  onAddItem(form: NgForm){
   // const ingName = this.nameInputRef.nativeElement.value;
    //const ingAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount); 
    if(this.editMode)
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    else
    this.slService.addIngredient(newIngredient);
    this.editMode = false;
    form.reset();
  }

onClear(){
  this.slForm.reset();
  this.editMode = false;
}


onDelete(){
  this.slService.deleteIngredient(this.editedItemIndex);
  this.onClear();

}

}
