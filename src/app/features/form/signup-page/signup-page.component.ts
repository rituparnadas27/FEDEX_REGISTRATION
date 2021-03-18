import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegexPatterns } from 'src/app/models/generic/regex-patterns';
import * as labels from '../../../../assets/json/label.json';
import { checkPasswordContainsUsername } from 'src/app/shared/validators/password-validation-username-check';
import { FormService } from '../form.services';
import { UserInputDetails } from 'src/app/models/form/user-details-dto';
import { customEmailValidators } from 'src/app/shared/validators/custom-email-validators';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
    labels:  any  = (labels  as  any).default;
    signUpForm: FormGroup;
    private formSubmitAttempt: boolean;
    disabled: boolean;
    userInputDetails = new UserInputDetails();
    constructor( private formBuilder: FormBuilder, private formService: FormService) { 
    //  this.label = this.label;
      this.formSubmitAttempt = false;
      this.disabled = false;
  }

  ngOnInit(): void {
    this.buildForm();
    this.disabled = false;
  }


  buildForm(){
     this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(RegexPatterns.onlyCharValue)]],
      lastName: ['', [Validators.required, Validators.pattern(RegexPatterns.onlyCharValue)]],
      emailId : ['', [Validators.required, Validators.pattern(RegexPatterns.properEmailValidators),customEmailValidators]],
      password: ['',[Validators.required,Validators.pattern(RegexPatterns.atleastContainOneUpperOrLowerCase),checkPasswordContainsUsername]]
    }
   );
  }



  

  /**
     * @param field
     */
    isFieldValid(field: string) {
   
    return (
          (!this.signUpForm.get(field).valid && this.signUpForm.get(field).touched) || (this.signUpForm.get(field).untouched && this.formSubmitAttempt)
      );
  }

  setUserInputDetails(){
      this.userInputDetails.firstName = this.signUpForm.controls['firstName'].value;
      this.userInputDetails.lastName = this.signUpForm.controls['lastName'].value;
      this.userInputDetails.email = this.signUpForm.controls['emailId'].value;

      return this.userInputDetails;
  }


   private finalCheckOfUsernamePass(){
    const password:string = this.signUpForm.controls['password'].value;
    const firstName:string = this.signUpForm.controls['firstName'].value;
    const lastName:string = this.signUpForm.controls['lastName'].value; 
    let isValidPass = true;
    if(firstName && lastName && password){
          if (password.toLowerCase().indexOf(firstName.toLowerCase()) != -1) {
              isValidPass = false; 
            
            }
            if (password.toLowerCase().indexOf(lastName.toLowerCase()) != -1) { 
              isValidPass = false;
            }
      }
      if(!isValidPass) {
        const errorObj = {'isPassWrdError' : 'true'};
        this.signUpForm.get('password').setErrors(errorObj);
      }else{
        this.signUpForm.get('password').setErrors(null);
        this.signUpForm.get('password').setValidators([Validators.required,Validators.pattern(RegexPatterns.atleastContainOneUpperOrLowerCase),checkPasswordContainsUsername]);
      }
      
      return isValidPass;
   }
  createAccount(){
    this.formSubmitAttempt = true;
    this.setUserInputDetails();
    const isFlag:boolean = this.finalCheckOfUsernamePass();
    if (this.formSubmitAttempt &&  isFlag) {
        if (this.signUpForm.valid) {
            this.disabled = true;
            this.formService.createNewUsers(this.userInputDetails).subscribe(_response => {
                this.disabled = false;
                this.signUpForm.reset();
                                           
            });
        }
     }
  }
}
