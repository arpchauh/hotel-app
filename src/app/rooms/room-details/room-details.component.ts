import { Component, OnInit, AfterViewInit } from "@angular/core";
import { RoomDetailsService, detailsInterFace } from "../room-details.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-room-details",
  templateUrl: "./room-details.component.html",
  styleUrls: ["./room-details.component.css"]
})
export class RoomDetailsComponent implements OnInit, AfterViewInit {
  test: detailsInterFace;
  constructor(private roomDetailService: RoomDetailsService) {
    this.test = this.roomDetailService.data;
  }

  ngOnInit() {}

  ngAfterViewInit() {}
}
