import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/MyService/data.service';

@Component({
  selector: 'app-add-intent',
  templateUrl: './add-intent.component.html',
  styleUrls: ['./add-intent.component.css'],
})
export class AddIntentComponent implements OnInit {
  intentform: boolean;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.intentform = this.data.intentdiv;
  }
  closeIntent() {
    this.data.intentdiv = false;
  }
  createIntent() {
    this.data.intentdiv = false;
    this.data.optionintent = true;
  }
}
