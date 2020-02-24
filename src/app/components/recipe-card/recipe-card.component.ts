import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input("featured") featured;
  @Input("height") height = 200;
  @Input("withDetail") withDetail = false;
  constructor() {}

  ngOnInit() {}
}
