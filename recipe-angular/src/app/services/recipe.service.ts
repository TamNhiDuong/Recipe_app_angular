import {Recipe} from '../recipes/recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Test recipe', 
            'Recipe testing description', 
            'https://images.unsplash.com/photo-1568899466260-b6d4e061856f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
            [
               new Ingredient('rice', 50),
               new Ingredient('salmon', 1)
            ])

        ,new Recipe(
            'Test recipe 2', 'Recipe testing description2', 
            'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
            [
                new Ingredient('egg', 2),
                new Ingredient('advocado', 2)
            ]) 
      ]

getRecipes() {
    return this.recipes.slice();
}
selectedRecipe = new EventEmitter<Recipe>();
}