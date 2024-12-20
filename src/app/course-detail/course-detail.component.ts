import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('oninit')
    // let id=this.activatedRoute.snapshot.params['Id']
    let id=this.activatedRoute.snapshot.paramMap.get('Id')
    console.log(id)
  }


}
