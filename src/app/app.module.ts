import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { ProductsComponent } from './products/products.component';
import { MailsComponent } from './mails/mails.component';
import { PhotosComponent } from './photos/photos.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ImdbsComponent } from './imdbs/imdbs.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { SocialprofilesComponent } from './socialprofiles/socialprofiles.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { StudentsIdcardsComponent } from './StudentsIdcards/StudentsIdcards.component';
import { CreateStudentsIdcardsComponent } from './create-students-idcards/create-students-idcards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DummyDisplayComponent } from './dummy-display/dummy-display.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatCommonModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { DummyDialogDisplayComponent } from './dummy-dialog-display/dummy-dialog-display.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { MatListModule } from "@angular/material/list";
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AccountDetailsComponent } from './Account-details/account-details.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { IdcardDetailsComponent } from './idcard-details/idcard-details.component';
import { EditIdcardComponent } from './edit-idcard/edit-idcard.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { SiblingsComponent } from './siblings/siblings.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { PricePipe } from './price.pipe';
import { CapitalDirective } from './capital.directive';
import { TokenInterceptor } from './token.interceptor';
import { AboutUsModule } from './about-us/about-us.module';
import { ShoppingComponent } from './shopping/shopping.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CreateProductComponent } from './create-product/create-product.component';
import { OperationsComponent } from './operations/operations.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    DirectivesComponent,
    RegistrationComponent,
    EmployeeComponent,
    FlipkartComponent,
    VehicleComponent,
    AccountsComponent,
    ProductsComponent,
    MailsComponent,
    PhotosComponent,
    WeatherComponent,
    BlogsComponent,
    ImdbsComponent,
    PokemonComponent,
    SocialprofilesComponent,
    CreateVehicleComponent,
    CreateAccountsComponent,
    StudentsIdcardsComponent,
    CreateStudentsIdcardsComponent,
    DummyDisplayComponent,
    DummyDialogDisplayComponent,
    CreateUserComponent,
    CreateStudentComponent,
    VehicleDetailsComponent,
    AccountDetailsComponent,
    EditAccountComponent,
    IdcardDetailsComponent,
    EditIdcardComponent,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    SiblingsComponent,
    Sibling1Component,
    Sibling2Component,
    TextAreaComponent,
    PricePipe,
    CapitalDirective,
    ShoppingComponent,
    CreateProductComponent,
    OperationsComponent,
    AllProductsComponent,
    ViewProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatIconModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCommonModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    ReactiveFormsModule,
    AboutUsModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
