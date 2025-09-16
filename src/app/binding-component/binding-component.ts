import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'binding-component',
  imports: [FormsModule],//for [(ngModel)] usage
  templateUrl: './binding-component.html',
  styleUrl: './binding-component.css',
  standalone: true
})
export class BindingComponent {
  name: string = 'Vasia';
}
