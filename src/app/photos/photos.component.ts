import { Component, OnInit } from "@angular/core";
import { Photos } from "./photos.model";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent implements OnInit {
  photos = [];
  constructor() {}

  ngOnInit() {
    this.photos.push(
      {
        imagePath: "https://i.ibb.co/G07MDV9/Beach2.jpg"
      },

      {
        imagePath: "https://i.ibb.co/j3pWTMK/Beach3.jpg"
      }
    );
  }
}
