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

@Component({
  selector: 'integrated-pipes',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    PercentPipe,
    CurrencyPipe,
    SlicePipe,
    DatePipe,
    DecimalPipe
  ],
  templateUrl: './integrated-pipes.html',
  styleUrl: './integrated-pipes.css'
})
export class IntegratedPipes {
  welcome: string = "Hello World!";
  percentage: number = 0.14;
  myDate = Date.now();
  pi: number = 3.1415;
}
