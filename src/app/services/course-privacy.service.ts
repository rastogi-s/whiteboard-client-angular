import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursePrivacyService {

  constructor() { }

  URL = 'http://localhost:5500/api/course/COURSEID/privacy'
  makeCoursePrivate(courseId) {
    return fetch(this.URL.replace('COURSEID', courseId), {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  makeCoursePublic(courseId) {
    return fetch(this.URL.replace('COURSEID', courseId), {
      method: 'DELETE',
      credentials: 'include'
    });
  }


  getAllPrivateCourses() {
    return fetch(this.URL.replace('COURSEID/', ''), {
      credentials: 'include'
    })
      .then(response => {
        if (response.headers.get('content-type') != null) {
          return response.json();
        } else {
          return [];
        }
      });
  }

}
