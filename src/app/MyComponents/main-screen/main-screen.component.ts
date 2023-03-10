import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/MyService/data.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css'],
})
export class MainScreenComponent implements OnInit {
  addintent: boolean;
  optionintent: boolean;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.addintent = this.data.intentdiv;
    // this.optionintent = this.data.optionintent;
  }
  ngDoCheck(): void {
    this.addintent = this.data.intentdiv;
    this.optionintent = this.data.optionintent;
    // console.log(this.addintent);
  }
}
