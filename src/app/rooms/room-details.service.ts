import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RoomDetailsService {
  details = new Subject<detailsInterFace>();
  data: detailsInterFace;
  constructor() {}

  setData(data) {
    this.data = data;
  }
}

export interface detailsInterFace {
  img: string;
  heading: string;
  price: string;
  type: string;
  size: string;
}
