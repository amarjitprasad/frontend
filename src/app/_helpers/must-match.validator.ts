import { FormGroup } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string){
        return (formGroup: FormGroup)=>{
            const control = formGroup.controls[controlName] ;
            const controlMatching = formGroup.controls[matchingControlName];

            if(controlMatching.errors && !controlMatching.errors.mustMatch){
                  return ;   
            }

            if(control.value !== controlMatching.value){
                controlMatching.setErrors({ mustMatch: true});
            }else{
                controlMatching.setErrors(null);
            }
        }
}