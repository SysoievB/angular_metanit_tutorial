import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent} from './first-component/first-component';
import {BindingComponent} from './binding-component/binding-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent, BindingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('angular-metanit-tutorial');
}
