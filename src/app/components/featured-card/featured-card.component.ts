import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-featured-card",
  templateUrl: "./featured-card.component.html",
  styleUrls: ["./featured-card.component.scss"]
})
export class FeaturedCardComponent implements OnInit {
  @Input("featured") featured;
  @Input("height") height = 200;
  @Input("withDetail") withDetail = false;
  constructor() {}

  ngOnInit() {}
}
