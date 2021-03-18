import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FedexHeaderComponent } from './fedex-header.component';

describe('FedexHeaderComponent', () => {
  let component: FedexHeaderComponent;
  let fixture: ComponentFixture<FedexHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FedexHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FedexHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
