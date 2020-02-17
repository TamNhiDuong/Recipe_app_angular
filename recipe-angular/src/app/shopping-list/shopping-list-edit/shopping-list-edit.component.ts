import { Component, OnInit} from '@angular/core';

import {ShoppingListService} from '../../services/shopping-list.service';
import {Ingredient} from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd(nameInput: string, quantityInput: number) {
    this.shoppingListService.onAddIngredient(nameInput, quantityInput)
  }
}
  