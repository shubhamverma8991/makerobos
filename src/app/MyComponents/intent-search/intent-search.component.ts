import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intent-search',
  templateUrl: './intent-search.component.html',
  styleUrls: ['./intent-search.component.css'],
})
export class IntentSearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  toggleOptions() {
    let selected = document.querySelectorAll('.options');
    selected[0].classList.toggle('active');
  }
}
