import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredients.module'; 

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient ('Rice', '150'),
    new Ingredient('Sugar', '50')
  ];

  constructor() { }

  ngOnInit() {
  }

}
