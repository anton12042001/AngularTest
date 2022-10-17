import {Component, OnInit} from '@angular/core';
import {ISingleProduct} from "../../models/singleProducts";
import {StorageService} from "../API/StorageService";
import {BackHttpService} from "../API/BackHttpService";
import {IProfile} from "../../models/profile";

@Component({
  selector: 'app-usersinfo',
  templateUrl: './usersinfo.component.html',
  styleUrls: ['./usersinfo.component.css']
})
export class UsersinfoComponent implements OnInit {
  profile: IProfile;
  constructor(private backHttpService: BackHttpService,
              private storageService: StorageService) {
  }
  ngOnInit(): void {
    let id=this.storageService.getData().id;
    this.backHttpService.getUserById(id).subscribe(user => {
      this.profile = user
    })
  }
}
