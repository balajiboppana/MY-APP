import { Component, Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
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

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent,children:[
    {path:'home', component:HomeComponent},
    {path:'welcome', component:WelcomeComponent},
    {path:'data-binding', component:DataBindingComponent},
    {path:'Calculator', component:CalculatorComponent},
    {path:'Rectangle', component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'BMI',component:BMIComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'registration',component:RegistrationComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'Flipkart',component:FlipkartComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'Accounts', component:AccountsComponent},
    {path:'products',component:ProductsComponent},
    {path:'mails',component:MailsComponent},
    {path:'photos',component:PhotosComponent},
    {path:'weather',component:WeatherComponent},
    {path:'blogs',component:BlogsComponent},
    {path:'imdbs',component:ImdbsComponent},
    {path:'pokemon', component:PokemonComponent},
    {path:'socialprofiles', component:SocialprofilesComponent},
    {path:'createVehicle', component:CreateVehicleComponent},
    {path:'createAccounts', component:CreateAccountsComponent},
    {path:'StudentsIdcards',component:StudentsIdcardsComponent},
    {path:'createStudentsIdcards', component:CreateStudentsIdcardsComponent},
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }