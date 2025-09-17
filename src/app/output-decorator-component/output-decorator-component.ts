import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'output-decorator-component',
  imports: [],
  templateUrl: './output-decorator-component.html',
  styleUrl: './output-decorator-component.css',
  standalone: true
})
export class OutputDecoratorComponent {
  private count = 0;

  // Create an event emitter for sending count updates to the parent
  @Output() countChanged = new EventEmitter<number>();

  increment() {
    this.count++;
    this.countChanged.emit(this.count); // send new value to parent
  }
}
