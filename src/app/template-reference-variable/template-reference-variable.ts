import {Component} from '@angular/core';

@Component({
  selector: 'template-reference-variable',
  imports: [],
  templateUrl: './template-reference-variable.html',
  styleUrl: './template-reference-variable.css'
})
export class TemplateReferenceVariable {

  sayHello(name: string) {
    alert('Hello, ' + name + '!');
  }
}
