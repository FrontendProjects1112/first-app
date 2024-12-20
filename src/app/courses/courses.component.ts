import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }
  courseDetails=[
    {
      name:'Angular',
      id:1,
      price:8000,
      color:'bg-info',
      imageUrl:'assets/images/ang.png'
    },
    {
      name:'React',
      id:2,
      price:6000,
       color:'bg-info',
       imageUrl:'assets/images/react.png'
    },
    {
      name:'JavaScript',
      id:3,
      price:5000,
       color:'bg-info',
       imageUrl:'assets/images/node.png'
    },
    {
      name:'Java',
      id:4,
      price:6000,
       color:'bg-info',
       imageUrl:'assets/images/ang.png'
    },
    {
      name:'NodeJS',
      id:5,
      price:7000,
       color:'bg-info',
       imageUrl:'assets/images/react.png'
    },
    {
      name:'NestJS',
      id:6,
      price:6000,
       color:'bg-info',
       imageUrl:'assets/images/node.png'
    }
  ]

  ngOnInit(): void {
  }
  getCourseId(id:any)
  {
    this.router.navigate(['CourseDetail',id],{relativeTo:this.activatedRoute})
  }

}
