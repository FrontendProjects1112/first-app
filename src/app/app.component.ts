import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of,Observable,pipe } from 'rxjs';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'concepts';
  constructor(private http:HttpClient)
  {

  }
  obs=of(1,2,3)
  
  onClick()
  {
    this.obs.pipe(map(i=>{
     return i*2
    })).subscribe(data=>{
      console.log(data)
    })
  }
}
