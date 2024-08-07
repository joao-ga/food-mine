import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [RouterModule, CommonModule, RatingModule, FormsModule],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!: Food;

  constructor(activatedRoute:ActivatedRoute, foodService: FoodService) {
    activatedRoute.params.subscribe((params) => {
      if(params['id']) {
          this.food = foodService.getFoodById(params['id']);
      }
    })
  }
}
