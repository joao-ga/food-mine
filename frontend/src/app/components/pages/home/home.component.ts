import { FoodService } from './../../../services/food.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router'; 
import { Food } from '../../../shared/models/Food';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from "../../partials/search/search.component";
import { TagsComponent } from '../../partials/tags/tags.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, RatingModule, FormsModule, SearchComponent, TagsComponent], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods: Food[] = [];
  
  constructor(private foodService: FoodService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params['searchTerm']) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      } else if(params['tag']) {
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      } else {
        this.foods = foodService.getAll();
      }
    })
    
  }
}
