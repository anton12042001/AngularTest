import { Component, OnInit } from '@angular/core';
import {BackHttpService} from "../API/BackHttpService";
import {StorageService} from "../API/StorageService";
import {IColor} from "../../models/color";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: IColor[] = []

  constructor(private backHttpService: BackHttpService){
  }

  ngOnInit(): void {
    this.backHttpService.color().subscribe(colors => {
      this.colors = colors
    })
  }
}
