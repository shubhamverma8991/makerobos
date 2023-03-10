import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/MyService/data.service';

@Component({
  selector: 'app-select-intent',
  templateUrl: './select-intent.component.html',
  styleUrls: ['./select-intent.component.css'],
})
export class SelectIntentComponent implements OnInit {
  constructor(private data: DataService) {}

  closeall() {
    this.data.optionintent = false;
    this.data.intentdiv = false;
    this.data.showallIntent = true;
    console.error(this.data.showallIntent);
    console.log(this.data.showallIntent);
  }
  ngOnInit(): void {}
}
