import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FedexSidebarComponent } from './fedex-sidebar.component';

describe('FedexSidebarComponent', () => {
  let component: FedexSidebarComponent;
  let fixture: ComponentFixture<FedexSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FedexSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FedexSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
