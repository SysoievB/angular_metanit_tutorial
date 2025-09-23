import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FirstComponent} from './first-component/first-component';
import {BindingComponent} from './binding-component/binding-component';
import {OperatorsComponent} from './operators-component/operators-component';
import {InputDecoratorComponent} from './input-decorator-component/input-decorator-component';
import {OutputDecoratorComponent} from './output-decorator-component/output-decorator-component';
import {TemplateReferenceVariable} from './template-reference-variable/template-reference-variable';
import {AttributeDirective} from './attribute-directive';
import {StructuralDirective} from './structural-directive';
import {DataService} from './DataService';
import {FormsModule} from '@angular/forms';
import {LogService} from './LogService';

@Component({
  selector: 'app-root',
  imports: [
    FirstComponent,
    BindingComponent,
    OperatorsComponent,
    InputDecoratorComponent,
    OutputDecoratorComponent,
    TemplateReferenceVariable,
    AttributeDirective,
    StructuralDirective,
    FormsModule
  ],
  providers: [DataService, LogService],//for the service
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  @ViewChild(TemplateReferenceVariable) templateRefVar!: TemplateReferenceVariable; // DOM element - access to the template reference variable
  name: string = "Tom";
  age: number = 24;
  count = 0;
  condition = true;
  items: string[] = [];
  serviceName: string = "";


  constructor(private dataService: DataService){}

  addItem(serviceName: string){
    this.dataService.addData(serviceName);
  }

  ngOnInit(){
    this.items = this.dataService.getData();
  }

  ngAfterViewInit() {
    this.templateRefVar.sayHello("World"); // Calls child method
  }

  onCountChanged(newCount: number) {
    this.count = newCount;// receives event from child
  }

  toggle() {
    this.condition = !this.condition;//used in structural directive
  }

  protected readonly title = signal('angular-metanit-tutorial');
}
