import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor() { }

  COURSE_URL = 'http://localhost:8080/api/course';

  findAllWidgetsForTopics(courseId, moduleId, lessonId, topicId) {
    return fetch(this.COURSE_URL + '/' + courseId + '/module/' +
      moduleId + '/lesson/' + lessonId + '/topic/' + topicId + '/widget',
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
