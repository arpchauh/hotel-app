import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { PhotosComponent } from "./photos/photos.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { BookRoomsComponent } from "./rooms/book-rooms/book-rooms.component";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { RoomDetailsComponent } from './rooms/room-details/room-details.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhotosComponent,
    RoomsComponent,
    BookRoomsComponent,
    RoomDetailsComponent,
    GalleryComponent
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
