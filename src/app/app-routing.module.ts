import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TestComponent } from './test/test.component';
import { ViewResponseComponent } from './view-response/view-response.component';


const routes: Routes = [
  {path:'sigin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'test',component:TestComponent},
  {path:'viewresponse',component:ViewResponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
