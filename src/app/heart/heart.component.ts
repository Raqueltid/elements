import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "sample-heart",
  templateUrl: "./heart.component.html",
  styleUrls: ["./heart.component.scss"]
})
export class HeartComponent {
  @Input()
  public width: number = 20;
}
