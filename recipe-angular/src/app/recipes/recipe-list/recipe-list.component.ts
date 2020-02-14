import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model'; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() itemWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Recipe testing description', 'https://images.unsplash.com/photo-1568899466260-b6d4e061856f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80')
    ,new Recipe('Test recipe 2', 'Recipe testing description2', 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80') 
  ]

  selectedItem:{}

  constructor() { }

  ngOnInit() {
  }
  onSelectedItem(recipe: Recipe) {
    this.itemWasSelected.emit(recipe);
  }
}
