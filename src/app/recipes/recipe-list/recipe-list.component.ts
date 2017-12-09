import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Burger-Food-Fries-Menu-Cheeseburger-Drink-Meal-34314.png'),
    new Recipe('A Test Recipe', 'This is a test', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Burger-Food-Fries-Menu-Cheeseburger-Drink-Meal-34314.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
