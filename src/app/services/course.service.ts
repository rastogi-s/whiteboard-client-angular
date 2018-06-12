import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  COURSE_URL = 'http://localhost:8080/api/course';
  constructor() {
  }

  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }

}
