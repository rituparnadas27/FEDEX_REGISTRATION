/**
 * the first username should be between 3 and 30 chars long
 *  
 * 
 */

import {AbstractControl} from '@angular/forms';
import { environment } from 'src/environments/environment';

export function customEmailValidators(control: AbstractControl): { [key: string]: boolean } | null {
    let isAllowed = false;
    const inputVal = control.value;
    if(inputVal){
        const index= inputVal.indexOf('@');
        const userNameOfEmailId = inputVal.substring(0,index);
        if(userNameOfEmailId && userNameOfEmailId.length >= environment.MIN_NUMBER && userNameOfEmailId.length <= environment.MAX_NUMBER){
            isAllowed = true;
        }
       if (!isAllowed) {
        return { 'isEmailValid': true };
       }
    
    }
     
    return null;
}


