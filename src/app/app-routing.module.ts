import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { PhotosComponent } from "./photos/photos.component";
import { BookRoomsComponent } from "./rooms/book-rooms/book-rooms.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { RoomDetailsComponent } from "./rooms/room-details/room-details.component";

const routes: Routes = [
  { path: "home", component: PhotosComponent },
  {
    path: "rooms",
    component: RoomsComponent,
    children: [
      { path: "book-rooms", component: BookRoomsComponent },
      { path: "room-details", component: RoomDetailsComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
