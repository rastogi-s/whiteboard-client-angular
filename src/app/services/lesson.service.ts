import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor() {
  }

  COURSE_URL = 'http://localhost:8080/api/course';

  findAllLessonsForModule(courseId, moduleId) {
    return fetch(this.COURSE_URL + '/' + courseId + '/module/' + moduleId + '/lesson',
      {
        method: 'GET'
      }).then(function (response) {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    });
  }
}
