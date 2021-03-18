import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldValidationComponent } from './form-field-validation.component';

describe('FormFieldValidationComponent', () => {
  let component: FormFieldValidationComponent;
  let fixture: ComponentFixture<FormFieldValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFieldValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
