import {EventEmitter} from '@angular/core';

import {Ingredient} from '../shared/ingredients.model';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
      new Ingredient ('Rice', 150),
      new Ingredient('Sugar', 50)  
    ]

    getIngredients() {
        return this.ingredients;
    }

    onAddIngredient(nameInput: string, quantityInput: number) {
        this.ingredients.push(
            new Ingredient (
                nameInput,
                quantityInput
            )
        )
    };

    getIngredientsFromRecipe(ingredients: Ingredient[]){
        for (let ingredient of ingredients) {
            this.ingredients.push(ingredient)
            
        }
    }
}
