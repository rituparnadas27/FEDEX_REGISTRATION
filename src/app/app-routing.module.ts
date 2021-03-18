import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FedexDefaultLayoutComponent } from './default-container/fedex-default-layout.component';


export const routes: Routes = [
  {
      path: '',
      component: FedexDefaultLayoutComponent,
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
