import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutCEOComponent } from './about-ceo/about-ceo.component';



@NgModule({
  declarations: [
    AboutCompanyComponent,
    AboutCEOComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
