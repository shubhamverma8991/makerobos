import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  intentdiv: boolean = false;
  optionintent: boolean = false;
  showallIntent: boolean;
  constructor() {}

  analysisData = [
    {
      title: 'Greetings',
      message: 102,
      importance: 0.98,
      accuracy: 1,
      catch: 10,
      color: 'green',
    },
    {
      title: 'Bye',
      message: 54,
      importance: 0.02,
      accuracy: '.5',
      catch: 5,
      color: 'red',
    },
    {
      title: 'Office hours',
      message: 10,
      importance: 0.05,
      accuracy: 8,
      catch: 3,
      color: 'green',
    },
    {
      title: 'Location',
      message: 45,
      importance: 0.34,
      accuracy: 5.2,
      catch: 9,
      color: 'yellow',
    },
  ];

  intentData = [
    {
      title: 'Do you deal in real state',
      msg: 'Asked 32 times last week',
    },
    {
      title: 'What time you are open ...',
      msg: 'Found 2 similar utterances',
    },
    {
      title: 'Where are you folks located ...',
      msg: '5 catch all request after reading this',
    },
  ];
}
