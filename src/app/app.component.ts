import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Questionnaire';
  name:string;

  constructor(private httpClient: HttpClient,private router:Router){}x
  ngOnInit(){
   
    
  }
  settok(){
    var set='';
    set=localStorage.getItem('token');
    this.name =localStorage.getItem('username');
    if(set==null)
    {
      return 0;
    }
    else{
      return 1;
    }
  }
  Add(){
      
  }
  logout(){
    localStorage.removeItem('username');
        localStorage.removeItem('userid');
        localStorage.removeItem('token');
        localStorage.removeItem('userresponse');
      this.router.navigate(['signin']);
  }

}
