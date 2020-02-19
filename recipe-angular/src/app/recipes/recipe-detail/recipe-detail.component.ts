import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

import {RecipeService} from '../../services/recipe.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe; 
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
     ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
       (params: Params) => {
        this.id = Number(params['id']);
        this.recipe = this.recipeService.selectedRecipe(this.id);
      }
    );
  }

  onAddToShoppingList(ingredients) {
    this.recipeService.addRecipeToShoppingList(ingredients);
  }

  editRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }

}  
