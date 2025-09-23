import {Injectable, Optional} from '@angular/core';
import {LogService} from "./LogService";

@Injectable()
export class DataService {
  private data: string[] = ["Tom", "Bob", "Sam"];

  /**
   * <h3>Why/When to use @Optional()</h3>
   * <ul>
   *  <li>When your class can still work without the dependency.</li>
   *  <li> For optional services, like logging, analytics, feature flags.</li>
   *  <li> When writing reusable libraries — consumers of your component might not want to provide all services.</li>
   * </ul>
   * <h3>This is like in Java:</h3>
   * <code>@Autowired(required = false)</code> → Spring won’t fail if the bean is missing.<br>
   * Angular’s @Optional() does the same thing.
   * */
  constructor(@Optional() private logService: LogService) {
  }

  getData(): string[] {
    this.logService.write("---getting data operation---");
    return this.data;
  }

  addData(data: string) {
    this.logService.write("---adding data operation---");
    this.data.push(data);
  }
}
