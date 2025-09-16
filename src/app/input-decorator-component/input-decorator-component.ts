import {Component, Input} from '@angular/core';

@Component({
  selector: 'input-decorator-component',
  imports: [],
  templateUrl: './input-decorator-component.html',
  styleUrl: './input-decorator-component.css',
  standalone: true
})
export class InputDecoratorComponent {
@Input({required: true}) userName!: string;
@Input({required: true}) userAge!: number;
}
