import { Component, OnInit } from "@angular/core";
import { RoomService } from "./rooms.service";
import { RoomDetailsService } from "./room-details.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.css"],
  providers: [RoomService]
})
export class RoomsComponent implements OnInit {
  btnShow = false;

  constructor(
    private roomsDetailsService: RoomDetailsService,
    private route: Router
  ) {}

  ngOnInit() {}

  getShowBookRoomBtn() {
    this.btnShow = true;
  }
}
