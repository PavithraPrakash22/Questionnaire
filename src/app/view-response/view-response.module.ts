import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewResponseComponent } from './view-response.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'viewresponse', component: ViewResponseComponent ,children:[ 
      
  ]}
  ])
  ]
})
export class ViewResponseModule { }
