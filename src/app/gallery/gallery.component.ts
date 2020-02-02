import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  galleryImg = [
    {
      name: "Tarkarli Beach",
      url: "https://i.ibb.co/37DQXBG/download.jpg"
    },
    {
      name: "Dandi Beach",
      url: "https://i.ibb.co/SmfRbC6/Dandi-Beach.jpg"
    },
    {
      name: "Wairy Ubhatwadi Beach",
      url: "https://i.ibb.co/Jx9WL5z/Wairy-Ubhatwadi-Beach.jpg"
    },
    {
      name: "Sindudurg Fort",
      url: "https://i.ibb.co/qWJ3B0h/sindhudurg-fort.jpg"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
