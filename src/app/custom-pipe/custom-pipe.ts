import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: "format",
  standalone: true
})
export class CustomPipe implements PipeTransform {

    transform(value: number, args?: any) : string {
        return  value.toString().replace(".", ",");
    }
}
