import {Injectable, Input} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable, Subject} from "rxjs";
import {ISingleProduct} from "../../models/singleProducts";
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
