import { Injectable } from '@angular/core';

@Injectable()
export class ValidatorService {

  constructor() { }

  /**
  * Check the input file for validity
  * @param data string 
  * @returns erros array (empty if there is no error)
  */
  public validate(content: string): string[]{
    const lines = content.toString().split('\n');
    let errors: string[] = [];
    let index = 1;
    for (let line of lines) {
      if (index == 1) {
        if(!this.checkUpperRightCorner(line)) 
          errors.push('error at line '+ index)
      }
      else {
          if (index % 2 == 0){
            if(!this.checkStartingPositionAndOrientation(line)) 
              errors.push('error at line '+ index)
          }
          else
             if(!this.checkInstructions(line)) 
              errors.push('error at line '+ index)  
      }index++;
    }
    return errors;
  }

  /**
  * Check the upper right corner, the corner
  * should respect the regex /^[0-9]{2}$/
  * @param data string
  * @returns test result
  */
  private checkUpperRightCorner(data: string): boolean{
    let regex = /^[0-9]{2}$/g
    let result = regex.test(data);
    return result;
  }

  /**
  * Check starting position and orientation 
  * they should respect /^[0-9]{2}[NEWS]{1}$/
  * @param data string
  * @returns test result
  */
  private checkStartingPositionAndOrientation(data: string): boolean{
    let regex = /^[0-9]{2}[NEWS]{1}$/g
    let result = regex.test(data);
    return result;
  }

  /**
  * Check Instructions
  * it should respect /^[ADG]+$/
  * @param data string
  * @returns test result
  */
  private checkInstructions(data: string): boolean{
    let regex = /^[ADG]+$/g
    let result = regex.test(data);
    return result;
  }

}
