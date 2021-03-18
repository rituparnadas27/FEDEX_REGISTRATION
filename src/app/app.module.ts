import { HttpClientModule } from '@angular/common/http';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FedexDefaultLayoutComponent } from './default-container/fedex-default-layout.component';
import { FedexFooterComponent } from './default-container/footer/fedex-footer.component';
import { FedexHeaderComponent } from './default-container/header/fedex-header.component';
import { FedexSidebarComponent } from './default-container/sidebar/fedex-sidebar.component';
import { SignupPageComponent } from './features/form/signup-page/signup-page.component';
import { FormFieldValidationComponent } from './shared/components/form-field-validation/form-field-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    FedexFooterComponent,
    FedexHeaderComponent,
    FedexSidebarComponent,
    FedexDefaultLayoutComponent,
    SignupPageComponent,
    FormFieldValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
