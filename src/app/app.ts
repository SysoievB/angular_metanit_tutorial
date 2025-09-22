import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FirstComponent} from './first-component/first-component';
import {BindingComponent} from './binding-component/binding-component';
import {OperatorsComponent} from './operators-component/operators-component';
import {InputDecoratorComponent} from './input-decorator-component/input-decorator-component';
import {OutputDecoratorComponent} from './output-decorator-component/output-decorator-component';
import {TemplateReferenceVariable} from './template-reference-variable/template-reference-variable';
import {AttributeDirective} from './attribute-directive';

@Component({
  selector: 'app-root',
  imports: [
    FirstComponent,
    BindingComponent,
    OperatorsComponent,
    InputDecoratorComponent,
    OutputDecoratorComponent,
    TemplateReferenceVariable,
    AttributeDirective
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  @ViewChild(TemplateReferenceVariable) templateRefVar!: TemplateReferenceVariable; // DOM element - access to the template reference variable
  name: string = "Tom";
  age: number = 24;
  count = 0;


  ngAfterViewInit() {
    this.templateRefVar.sayHello("World"); // Calls child method
  }


  onCountChanged(newCount: number) {
    this.count = newCount;// receives event from child
  }

  protected readonly title = signal('angular-metanit-tutorial');
}
