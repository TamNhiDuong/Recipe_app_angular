import {EventEmitter} from '@angular/core';

import {Ingredient} from '../shared/ingredients.module';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
      new Ingredient ('Rice', 150),
      new Ingredient('Sugar', 50)  
    ]

    getIngredients() {
        return this.ingredients.slice();
    }

    onAddIngredient(nameInput: string, quantityInput: number) {
        this.ingredients.push(
            new Ingredient (
                nameInput,
                quantityInput
            )
        )
        console.log('service called')
    };
}
