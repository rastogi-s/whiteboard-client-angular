import {Component, OnInit} from '@angular/core';
import {Course} from '../../models/course.model.client';
import {CourseService} from '../../services/course.service';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model.client';
import {SectionService} from '../../services/section.service';
import {CoursePrivacyService} from '../../services/course-privacy.service';

@Component({

  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']

})
export class CourseGridComponent implements OnInit {

  courses: Course[] = [];
  registeredCourseIds = [];
  registeredCourses = [];
  nonRegisteredCourses = [];
  user: User;
  studentSections = [];
  privateCourses = [];

  constructor(private service: CourseService,
              private userService: UserService,
              private sectionService: SectionService,
              private coursePrivacyService: CoursePrivacyService ) {
  }

  ngOnInit() {
    this.service.findAllCourses().then(courses => this.courses = courses).then(() =>
      this.sectionService.findSectionsForStudent().then((sections) => {
        if (sections.length > 0) {
          this.studentSections = sections;
          this.registeredCourseIds = this.studentSections.map((sect) => sect.section.courseId);
          this.registeredCourses = this.courses.filter((course) => this.registeredCourseIds.includes(course.id.toString()));
          this.nonRegisteredCourses = this.courses.filter((course) => (!this.registeredCourseIds.includes(course.id.toString())));
        } else {
          this.nonRegisteredCourses = this.courses;
        }
      })).then( () => this.coursePrivacyService.getAllPrivateCourses().then( privateCourse =>
      this.privateCourses = privateCourse));
  }

  checkPrivacy(courseId) {
    return this.privateCourses.filter(records => records.courseId === courseId.toString()).length > 0;
  }

}
