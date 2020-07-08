import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'signup', component: SignUpComponent ,children:[ 
      
  ]}
  ])
    ]
})
export class SignUpModule { }
