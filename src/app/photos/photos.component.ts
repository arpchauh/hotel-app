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
        imagePath: "https://i.ibb.co/P9Q73YR/sea.jpg"
      },

      {
        imagePath: "https://i.ibb.co/0q8SLjk/beach.jpg"
      }
    );
  }
}
