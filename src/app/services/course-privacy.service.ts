import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CoursePrivacyService {

  location: string;
  HEROKU_BASE_URL = 'https://whiteboard-middle-tier-node.herokuapp.com/api/course/COURSEID/privacy';
  LOCAL_BASE_URL = 'http://localhost:5500/api/course/COURSEID/privacy';
  URL: string;

  constructor() {
    this.location = window.location.href;
    if (!location.toString().includes('localhost')) {
      this.URL = this.HEROKU_BASE_URL;
    } else {
      this.URL = this.LOCAL_BASE_URL;
    }
  }

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
