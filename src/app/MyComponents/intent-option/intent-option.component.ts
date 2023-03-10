import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/MyService/data.service';

@Component({
  selector: 'app-intent-option',
  templateUrl: './intent-option.component.html',
  styleUrls: ['./intent-option.component.css'],
})
export class IntentOptionComponent implements OnInit {
  intentpresent: boolean;
  datadiv: boolean;
  intentarraydata: any;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.datadiv = false;
    this.intentpresent = true;
  }
  addintent() {
    this.data.intentdiv = true;
    this.intentpresent = false;
    this.datadiv = true;
    console.log(this.data.intentdiv);
  }
  ngDoCheck(): void {
    this.datadiv = this.data.showallIntent;
    this.intentarraydata = this.data.intentData;
    console.log('check ' + this.datadiv);
    // if ((this.datadiv = false)) {
    //   this.intentpresent = true;
    //   this.datadiv = false;
    // } else {
    //   this.intentpresent = false;
    //   this.datadiv = true;
    // }
  }
}
