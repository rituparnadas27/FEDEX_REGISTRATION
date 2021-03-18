import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FormFieldValidationComponent } from 'src/app/shared/components/form-field-validation/form-field-validation.component';
import { SignupPageComponent } from './signup-page.component';



describe('SignupPageComponent', () => {
  let component: SignupPageComponent;
  let fixture: ComponentFixture<SignupPageComponent>;
  let htmlel;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupPageComponent,  FormFieldValidationComponent],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .overrideComponent(FormFieldValidationComponent, {
      set: {
          selector: 'app-form-field-validation',
          template: `<h6>Displays Form validation error</h6>`,
          inputs: ['displayError', 'control', 'errorMsg',
                        'minimumLength', 'form', 'isPass']
      }
  })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.signUpForm.valid).toBeFalsy(); 
  });
  
  it('check firstname should be a char value', () => {
    htmlel = fixture.debugElement.query(By.css('#firstName')).nativeElement;
    const firstNameControl = component.signUpForm.controls['firstName'];

    sendInput(htmlel, 'test####');
    expect(firstNameControl.valid).toBeFalsy();

    sendInput(htmlel, 'Testfirstname');
    expect(firstNameControl.valid).toBeTruthy();
});

it('check lastname should be a char value', () => {
  htmlel = fixture.debugElement.query(By.css('#lastName')).nativeElement;
  const lastNameControl = component.signUpForm.controls['lastName'];

  sendInput(htmlel, 'test####');
  expect(lastNameControl.valid).toBeFalsy();

  sendInput(htmlel, 'Testlastname');
  expect(lastNameControl.valid).toBeTruthy();
});

it('check firstname should allow all lowercase value', () => {
  htmlel = fixture.debugElement.query(By.css('#firstName')).nativeElement;
  const firstNameControl = component.signUpForm.controls['firstName'];

  sendInput(htmlel, 'testfirstname');
  expect(firstNameControl.valid).toBeTruthy();

});

it('check lastname should allow all lowercase value', () => {
  htmlel = fixture.debugElement.query(By.css('#lastName')).nativeElement;
  const lastNameControl = component.signUpForm.controls['lastName'];

  sendInput(htmlel, 'testlastname');
  expect(lastNameControl.valid).toBeTruthy();
});

it('check firstname should allow all UPPERCASE value', () => {
  htmlel = fixture.debugElement.query(By.css('#firstName')).nativeElement;
  const firstNameControl = component.signUpForm.controls['firstName'];

  sendInput(htmlel, 'TESTFIRSTNAME');
  expect(firstNameControl.valid).toBeTruthy();

});

it('check lastname should allow all UPPERCASE value', () => {
  htmlel = fixture.debugElement.query(By.css('#lastName')).nativeElement;
  const lastNameControl = component.signUpForm.controls['lastName'];

  sendInput(htmlel, 'TESTLASTNAME');
  expect(lastNameControl.valid).toBeTruthy();
});



  it('check email address should not contain special char except dot and @', () => {
    htmlel = fixture.debugElement.query(By.css('#emailId')).nativeElement;
    const emailControl = component.signUpForm.controls['emailId'];

    sendInput(htmlel, 'test#@gmail.com');
    expect(emailControl.valid).toBeFalsy();

    sendInput(htmlel, 'test@gmail.com');
    expect(emailControl.valid).toBeTruthy();
});

it('check email username should not be less than 3 chars', () => {
  htmlel = fixture.debugElement.query(By.css('#emailId')).nativeElement;
  const emailControl = component.signUpForm.controls['emailId'];

  sendInput(htmlel, 'te@gmail.com');
  expect(emailControl.valid).toBeFalsy();

  sendInput(htmlel, 'test@gmail.com');
  expect(emailControl.valid).toBeTruthy();
});

it('check email username should not be more than 30 chars', () => {
  htmlel = fixture.debugElement.query(By.css('#emailId')).nativeElement;
  const emailControl = component.signUpForm.controls['emailId'];

  sendInput(htmlel, 'testhdywvdhasdfghterwetryuhgdfg@gmail.com');
  expect(emailControl.valid).toBeFalsy();

  sendInput(htmlel, 'test@gmail.com');
  expect(emailControl.valid).toBeTruthy();
});

it('check email address allow dot char', () => {
  htmlel = fixture.debugElement.query(By.css('#emailId')).nativeElement;
  const emailControl = component.signUpForm.controls['emailId'];

  sendInput(htmlel, 'user.test@gmail.com');
  expect(emailControl.valid).toBeTruthy();


});

it('check email address does not allow duplicate @ char', () => {
  htmlel = fixture.debugElement.query(By.css('#emailId')).nativeElement;
  const emailControl = component.signUpForm.controls['emailId'];

  sendInput(htmlel, 'user@test@gmail.com');
  expect(emailControl.valid).toBeFalsy();

  sendInput(htmlel, 'test@gmail.com');
  expect(emailControl.valid).toBeTruthy();
});

it('check email address is  a valid one i.e should contain domain name followed by @', () => {
  htmlel = fixture.debugElement.query(By.css('#emailId')).nativeElement;
  const emailControl = component.signUpForm.controls['emailId'];

  sendInput(htmlel, 'user.com');
  expect(emailControl.valid).toBeFalsy();

  sendInput(htmlel, 'test@gmail.com');
  expect(emailControl.valid).toBeTruthy();
});

it('check password should contain atleast one uppercase and one lowercase', () => {
  htmlel = fixture.debugElement.query(By.css('#password')).nativeElement;
  const passControl = component.signUpForm.controls['password'];

  sendInput(htmlel, 'testpassword');
  expect(passControl.valid).toBeFalsy();

  sendInput(htmlel, 'Testpassword');
  expect(passControl.valid).toBeTruthy();
});
it('check password should contain minimum length 8', () => {
  htmlel = fixture.debugElement.query(By.css('#password')).nativeElement;
  const passControl = component.signUpForm.controls['password'];

  sendInput(htmlel, 'Testpas');
  expect(passControl.valid).toBeFalsy();

  sendInput(htmlel, 'Testpass');
  expect(passControl.valid).toBeTruthy();
});

it('check password might contain digits', () => {
  htmlel = fixture.debugElement.query(By.css('#password')).nativeElement;
  const passControl = component.signUpForm.controls['password'];

  sendInput(htmlel, 'Test1234');
  expect(passControl.valid).toBeTruthy();
});

it('check password might contain special char', () => {
  htmlel = fixture.debugElement.query(By.css('#password')).nativeElement;
  const passControl = component.signUpForm.controls['password'];

  sendInput(htmlel, 'Test@1234');
  expect(passControl.valid).toBeTruthy();
});

it('check password should not contain firstname or lastname', () => {
  htmlel = fixture.debugElement.query(By.css('#password')).nativeElement;
  const passControl = component.signUpForm.controls['password'];
  const firstNameControl = 'TestfirstName';

  sendInput(htmlel, 'TestfirstName@1234');
  expect(passControl).not.toContain(firstNameControl);
 });

 it('check password should not contain lastname', () => {
  htmlel = fixture.debugElement.query(By.css('#password')).nativeElement;
  const passControl = component.signUpForm.controls['password'];
  const lastNameControl = 'TestlastName';

  sendInput(htmlel, 'TestlastName@1234');
  expect(passControl).not.toContain(lastNameControl);
 });

 it('check password should not contain lastname', () => {
  htmlel = fixture.debugElement.query(By.css('#password')).nativeElement;
  const passControl = component.signUpForm.controls['password'];
  const lastNameControl = 'TestlastName';

  sendInput(htmlel, 'TestlastName@1234');
  expect(passControl).not.toContain(lastNameControl);
 });



function sendInput(html: HTMLInputElement, text: string) {
  html.value = text;
  html.dispatchEvent(new Event('input'));
  fixture.detectChanges();
  return fixture.whenStable();
}

});



