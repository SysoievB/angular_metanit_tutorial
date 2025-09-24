import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: "format",
  standalone: true,
  pure: true // By default, all pipes are pure(changes not allowed)
})
export class CustomPipe implements PipeTransform {

    transform(value: number, args?: any) : string {
        return  value.toString().replace(".", ",");
    }
}
