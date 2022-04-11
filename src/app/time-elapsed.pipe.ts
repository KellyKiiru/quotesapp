import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeElapsed'
})
export class TimeElapsedPipe implements PipeTransform {

  transform(value: any): number {
    let timeNow : number = new Date().getTime();
    let timePassed : number = timeNow - value;
    let timePassedInMinutes:number = timePassed/60000;

    return timePassedInMinutes;
  }

}
