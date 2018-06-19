import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  location: string;
  COURSE_SECTION_URL: string;
  SECTION_URL: string;
  STUDENT_SECTION: string;
  URL: string;

  constructor() {
    this.location = window.location.href;
    if (!location.toString().includes('localhost')) {
      this.COURSE_SECTION_URL = 'https://whiteboard-middle-tier-node.herokuapp.com/api/course/COURSEID/section';
      this.SECTION_URL = 'https://whiteboard-middle-tier-node.herokuapp.com/api/section';
      this.STUDENT_SECTION = 'https://whiteboard-middle-tier-node.herokuapp.com/api/student/sections';
    } else {
      this.COURSE_SECTION_URL = 'http://localhost:5500/api/course/COURSEID/section';
      this.SECTION_URL = 'http://localhost:5500/api/section';
      this.STUDENT_SECTION = 'http://localhost:5500/api/student/sections';
    }
  }


  findSectionsForStudent() {
    return fetch(this.STUDENT_SECTION, {
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
    return fetch(this.SECTION_URL, {
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
    const url = this.SECTION_URL + '/' + sectionId + '/enroll';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  unenrollStudentInSection(sectionId) {
    const url = this.SECTION_URL + '/' + sectionId + '/unenroll';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.COURSE_SECTION_URL.replace('COURSEID', courseId))
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
    return fetch(this.COURSE_SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection(sectionId) {
    return fetch(this.SECTION_URL + '/' + sectionId, {
      method: 'DELETE',
    });
  }


  updateSection(sectionId, section) {
    console.log(section);
    return fetch(this.SECTION_URL + '/' + sectionId, {
      method: 'PUT',
      body: JSON.stringify(section),
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
