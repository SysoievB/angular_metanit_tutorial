import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'operators-component',
  imports: [FormsModule],
  templateUrl: './operators-component.html',
  styleUrl: './operators-component.css'
})
export class OperatorsComponent {
  num: number = 0;
  items = ["Tom", "Bob", "Sam"];
}
