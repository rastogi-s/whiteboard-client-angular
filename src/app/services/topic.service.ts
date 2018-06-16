import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }
  COURSE_URL = 'http://localhost:8080/api/course';

  findAllTopicsForLesson(courseId, moduleId, lessonId) {
    return fetch(this.COURSE_URL + '/' + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic',
      {
        method: 'GET'
      }).then(function (response) {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return [];
      }
    });
  }
}
