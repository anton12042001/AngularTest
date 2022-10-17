import {Component, OnInit} from '@angular/core';
import {StorageService} from "../API/StorageService";
import {BackHttpService} from "../API/BackHttpService";
import {IProfile} from "../../models/profile";
import * as events from "events";

@Component({
  selector: 'app-usersinfo',
  templateUrl: './usersinfo.component.html',
  styleUrls: ['./usersinfo.component.css']
})
export class UsersinfoComponent implements OnInit {
  profile: IProfile;
  word:string
  constructor(private backHttpService: BackHttpService,
              private storageService: StorageService) {
  }
  ngOnInit(): void {
    (this.storageService.getData().id !== 0) && this.storageService.getData().id;
    // (this.storageService.getData() !== 0) && this.storageService.getData();
    let id=this.storageService.getData().id;
    this.backHttpService.getUserById(id).subscribe(user => {
      this.profile = user
    })
  }
  onClick(profile:IProfile){
    this.backHttpService.updateUserById(profile.id,this.word).subscribe(() => []);
    this.profile.first_name = this.word
  }

  onChange(event: any){
    this.word = event.target.value
  }
}
