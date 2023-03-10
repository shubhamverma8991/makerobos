import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-options',
  templateUrl: './main-options.component.html',
  styleUrls: ['./main-options.component.css'],
})
export class MainOptionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let selected = document.getElementById('bot_detail');
    selected.classList.add('active');
  }
  botclick() {
    let option = document.querySelectorAll('.option');
    option.forEach((element) => {
      element.classList.remove('active');
    });
    let selected = document.getElementById('bot_detail');
    selected.classList.add('active');
  }
  optionSelect(selected: any) {
    let option = document.querySelectorAll('.option');
    let bot = document.getElementById('bot_detail');
    option.forEach((element) => {
      element.classList.remove('active');
    });
    option[selected - 1].classList.add('active');
    bot.classList.remove('active');
  }
}
