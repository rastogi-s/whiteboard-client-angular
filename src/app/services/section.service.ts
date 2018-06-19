import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor() {
  }

  SECTION_URL = 'http://localhost:5500/api/course/COURSEID/section';

  findSectionsForStudent() {
    const url = 'http://localhost:5500/api/student/sections';
    return fetch(url, {
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

  findAllSections() {
    const url = 'http://localhost:5500/api/section';
    return fetch(url, {
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

  enrollStudentInSection(sectionId) {
    const url = 'http://localhost:5500/api/section/' + sectionId + '/enroll';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  unenrollStudentInSection(sectionId) {
    const url = 'http://localhost:5500/api/section/' + sectionId + '/unenroll';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => {
        if (response.headers.get('content-type') != null) {
          return response.json();
        } else {
          return [];
        }
      });
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, availableSeats: seats, maxSeats: seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection(sectionId) {
    return fetch('http://localhost:5500/api/section' + '/' + sectionId, {
      method: 'DELETE',
    });
  }


  updateSection(sectionId, section) {
    console.log(section);
    return fetch('http://localhost:5500/api/section' + '/' + sectionId, {
      method: 'PUT',
      body: JSON.stringify(section),
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
