import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/MyService/data.service';

@Component({
  selector: 'app-analytics-option',
  templateUrl: './analytics-option.component.html',
  styleUrls: ['./analytics-option.component.css'],
})
export class AnalyticsOptionComponent implements OnInit {
  analyticsdata: any = [];
  condition: any;
  constructor(private data: DataService) {
    this.analyticsdata = data.analysisData;
    console.log('anaylysis data', this.analyticsdata);
  }

  ngOnInit(): void {}
}
