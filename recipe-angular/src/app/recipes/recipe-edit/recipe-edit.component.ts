import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode= false;
  recipe: Recipe;
  recipeName: string = '';
  recipeDescription: string = '';
  ingredients: Ingredient[] = [];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    ) { }

  ngOnInit() {
    this.route.params 
    .subscribe( 
      (params: Params)=> {
        this.id= params['id'];
        this.editMode = params['id'] != null;
        this.recipe = this.recipeService.selectedRecipe(this.id);
        console.log(this.editMode)
      })
  }

}
