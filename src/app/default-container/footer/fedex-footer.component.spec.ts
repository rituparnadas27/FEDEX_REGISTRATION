import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FedexFooterComponent } from './fedex-footer.component';

describe('FedexFooterComponent', () => {
  let component: FedexFooterComponent;
  let fixture: ComponentFixture<FedexFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FedexFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FedexFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
