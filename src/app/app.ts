import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent} from './first-component/first-component';
import {BindingComponent} from './binding-component/binding-component';
import {OperatorsComponent} from './operators-component/operators-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent, BindingComponent, OperatorsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('angular-metanit-tutorial');
}
