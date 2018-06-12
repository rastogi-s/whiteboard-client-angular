import { Component, OnInit } from '@angular/core';
import {Course} from '../../models/course.model.client';
import {CourseService} from '../../services/course.service';
@Component({

  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']

})
export class CourseGridComponent implements OnInit {

  courses: Course[] = [];
  constructor(private service: CourseService) { }

  ngOnInit() {
    this.service.findAllCourses().then(courses => this.courses = courses);
  }

}
