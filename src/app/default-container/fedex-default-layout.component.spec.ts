import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupPageComponent } from '../features/form/signup-page/signup-page.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { FedexDefaultLayoutComponent } from './fedex-default-layout.component';
import { FedexFooterComponent } from './footer/fedex-footer.component';
import { FedexHeaderComponent } from './header/fedex-header.component';
import { FedexSidebarComponent } from './sidebar/fedex-sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('FedexDefaultLayoutComponent', () => {
  let component: FedexDefaultLayoutComponent;
  let fixture: ComponentFixture<FedexDefaultLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FedexDefaultLayoutComponent , FedexHeaderComponent, FedexFooterComponent, SignupPageComponent, FedexSidebarComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FedexDefaultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
