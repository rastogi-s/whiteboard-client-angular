import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor() { }

  COURSE_URL = 'http://localhost:8080/api/course';

  findAllModulesForCourse(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId + '/module',
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
