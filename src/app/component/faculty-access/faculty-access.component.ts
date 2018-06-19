import {Component, OnInit} from '@angular/core';
import {Course} from '../../models/course.model.client';
import {CourseService} from '../../services/course.service';
import {CoursePrivacyService} from '../../services/course-privacy.service';

@Component({
  selector: 'app-faculty-access',
  templateUrl: './faculty-access.component.html',
  styleUrls: ['./faculty-access.component.css']
})
export class FacultyAccessComponent implements OnInit {

  courses: Course[] = [];
  privateCourseIds = [];

  constructor(private courseService: CourseService, private coursePrivacy: CoursePrivacyService) {
  }

  ngOnInit() {
    this.courseService.findAllCourses().then((courses) =>
      this.courses = courses).then(() =>
      this.coursePrivacy.getAllPrivateCourses().then((privateCourses) =>
        this.privateCourseIds = privateCourses));
  }

  makePublic(courseId) {

    this.coursePrivacy.makeCoursePublic(courseId).then(() =>
      this.coursePrivacy.getAllPrivateCourses().then((privateCourses) =>
        this.privateCourseIds = privateCourses));

  }

  makePrivate(courseId) {

    this.coursePrivacy.makeCoursePrivate(courseId).then(() =>
      this.coursePrivacy.getAllPrivateCourses().then((privateCourses) =>
        this.privateCourseIds = privateCourses));

  }

  checkPrivacy(courseId) {
      return this.privateCourseIds.filter(records => records.courseId === courseId.toString()).length > 0;
  }

}
