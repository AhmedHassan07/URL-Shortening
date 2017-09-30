import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.activatedRoute.params.subscribe((params: Params) => {
    //  let user = params['user'];
    //  console.log(user  );
    //});
    console.log(this.activatedRoute.snapshot.data['user'].json())
  }

}
