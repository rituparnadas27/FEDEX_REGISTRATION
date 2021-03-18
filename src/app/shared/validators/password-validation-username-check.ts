import { FormControl} from "@angular/forms";

export function checkPasswordContainsUsername(control: FormControl): any {
       const inputVal:string = control.value;
       let isInValidPass = false;
        if(inputVal){
            console.log('inputVal', inputVal);
            const fName1 = control.parent.controls['firstName'].value.toLowerCase();
            const fName2 = control.parent.controls['lastName'].value.toLowerCase(); 
            if(fName1 && fName2){
                  if (inputVal.toLowerCase().indexOf(fName1) !== -1) {
                      isInValidPass = true; }
                   if (inputVal.toLowerCase().indexOf(fName2) !== -1) { 
                       isInValidPass = true;
                    }
             }
             if(isInValidPass){
                  return {
                     'isPassWrdError' : 'true'
                 }
             }
        }
    return null;
  }

