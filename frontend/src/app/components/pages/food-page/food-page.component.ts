import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [RouterModule, CommonModule, RatingModule, FormsModule],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!: Food;

  constructor(
    activatedRoute:ActivatedRoute, 
    foodService: FoodService,
    private cartService: CartService,
    private router: Router
   ) {

    activatedRoute.params.subscribe((params) => {
      if(params['id']) {
          this.food = foodService.getFoodById(params['id']);
      }
    })

  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  } 

}
