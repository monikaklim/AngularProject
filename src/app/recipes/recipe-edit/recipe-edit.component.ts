import { Ingredient } from './../../shared/ingredient.model';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
editMode = false;
recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) =>{
    this.id = +params['id'];
    this.editMode = params['id'] != null;
    this.initForm();
    }
    );
  }


private initForm(){
  let recipeName = '';
  let recipeImagePath = '';
  let recipeDescription = '';
  let recipeIngredients = new FormArray([]);

  if(this.editMode){
    const recipe = this.recipeService.getRecipe(this.id);
    recipeName = recipe.name;
    recipeDescription = recipe.description;
    recipeImagePath = recipe.imagePath;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name,Validators.required),
            'amount': new FormControl(ingredient.amount,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }

  }
  this.recipeForm = new FormGroup({
    'name': new FormControl(recipeName, Validators.required),
    'imagePath': new FormControl(recipeImagePath,Validators.required),
    'description': new FormControl(recipeDescription,Validators.required),
    'ingredients': recipeIngredients
  })
}

onSubmit(){
  console.log(this.recipeForm);
}


get controls(){
  return (<FormArray>this.recipeForm.get('ingredients')).controls;
}


onAddIngredient(){
  this.controls.push(new FormGroup({
    'name': new FormControl(null,Validators.required),
    'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
  }));
}


}