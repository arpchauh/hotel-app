import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RoomDetailsService } from "../room-details.service";

@Component({
  selector: "app-book-rooms",
  templateUrl: "./book-rooms.component.html",
  styleUrls: ["./book-rooms.component.css"]
})
export class BookRoomsComponent implements OnInit {
  roomDetails = [
    {
      img: "https://i.ibb.co/LZK95PG/malavan-room-2.jpg",
      img1: "https://i.ibb.co/kmT63CK/malvan-room.jpg",
      img2: "https://i.ibb.co/CMPsSFw/room-pandu.jpg",
      heading: "AC Room",
      price: "INR 2000/-",
      type: "Twin Beds",
      size: "6.58 X 3.23 sq.mtr"
    },

    {
      img: "https://i.ibb.co/kmT63CK/malvan-room.jpg",
      img1: "https://i.ibb.co/kmT63CK/malvan-room.jpg",
      img2: "https://i.ibb.co/CMPsSFw/room-pandu.jpg",
      heading: "NON AC Room",
      price: "INR 1200/-",
      type: "Twin Beds",
      size: "6.58 X 3.23 sq.mtr"
    },
    {
      img: "https://i.ibb.co/CMPsSFw/room-pandu.jpg",
      img1: "https://i.ibb.co/kmT63CK/malvan-room.jpg",
      img2: "https://i.ibb.co/CMPsSFw/room-pandu.jpg",
      heading: "AC Room",
      price: "INR 2000/-",
      type: "Twin Beds",
      size: "6.58 X 3.23 sq.mtr"
    },
    {
      img: "https://i.ibb.co/fk8wVTv/malavan-room-1.jpg",
      img1: "https://i.ibb.co/kmT63CK/malvan-room.jpg",
      img2: "https://i.ibb.co/CMPsSFw/room-pandu.jpg",
      heading: "NON AC Room",
      price: "INR 1200/-",
      type: "Twin Beds",
      size: "6.58 X 3.23 sq.mtr"
    }
  ];
  constructor(
    private roomsDetailsService: RoomDetailsService,
    private route: Router
  ) {}

  ngOnInit() {}
  goToRoomDetails(data) {
    console.log("data", data);
    this.roomsDetailsService.setData(data);
    this.route.navigateByUrl("/rooms/room-details");
  }
}
