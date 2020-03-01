import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-error-text",
  templateUrl: "./error-text.component.html",
  styleUrls: ["./error-text.component.scss"]
})
export class ErrorTextComponent implements OnInit {
  @Input("text") text: string = "";
  constructor() {}

  ngOnInit() {}
}
