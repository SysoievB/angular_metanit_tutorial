import {Component} from '@angular/core';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  UpperCasePipe
} from '@angular/common';
import {CustomPipe} from '../custom-pipe/custom-pipe';

@Component({
  selector: 'integrated-pipes',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    PercentPipe,
    CurrencyPipe,
    SlicePipe,
    DatePipe,
    DecimalPipe,
    CustomPipe
  ],
  templateUrl: './integrated-pipes.html',
  styleUrl: './integrated-pipes.css'
})
export class IntegratedPipes {// By default, all pipes are pure(changes not allowed)
  welcome: string = "Hello World!";
  percentage: number = 0.14;
  myDate = Date.now();
  pi: number = 3.1415;
  x: number = 15.45;
}
