import {Injectable} from "@angular/core";
import {IProfile} from "../../models/profile";

@Injectable({
  providedIn:"root"
})

export class StorageService {
  private data: IProfile;
  constructor() {
  }
  setData(data: any) {
    this.data = data;
  }
  getData(): IProfile {
    let temp = this.data;
    return temp;
  }
}
