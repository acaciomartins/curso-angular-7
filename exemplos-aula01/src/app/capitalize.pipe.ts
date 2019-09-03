import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = '';
    let values = value.split(' ');
    for (let v of values) {
      result += this.capitalize(v) + ' ';
    }
    return result;
  }
  
  capitalize = (value) => {
   return value.substring(0,1).toUpperCase() +
    value.substring(1).toLowerCase();
  }
  
  

}
