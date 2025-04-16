import { Component } from '@angular/core';
import { Student } from './model/student';
import { Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFirstProject';
  id:number=10;
  name:string="akshay";
  c:boolean=true;

  stu:Student={
    id:101,
    name:"ak",
    userName:"ak@123",
    password:"123",
    addr:{
      cityName: "pune",
      areaName: "karvenagar"
    }
  }
  emp:Employee[]=[
    {
      id: 101,
      ename: 'vijay',
      email: 'vijay@gmail.com'
    },
    {
      id: 102,
      ename: 'sai',
      email: 'sai@gmail.com'
    }
  ]

}
