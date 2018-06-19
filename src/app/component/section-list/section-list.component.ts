import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionService} from '../../services/section.service';
import {Course} from '../../models/course.model.client';
import {CourseService} from '../../services/course.service';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionService, private courseService: CourseService,
              private router: Router, private route: ActivatedRoute, private userService: UserService) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }

  // sectionName = '';
  // seats = '';
  courseId = '';
  sections = [];
  studentSections = [];
  course: Course;
  user: User;
  enrollAllowed: boolean;

  loadSections(courseId) {
    this.courseId = courseId;

    this.course = {id: '1', title: 'dummy'};
    if (this.courseId != null && this.courseId !== '') {
      this.courseService
        .findCourseById(this.courseId)
        .then((course) => this.course = course);
      this.service
        .findSectionsForCourse(courseId)
        .then(sections => this.sections = sections).then(() => {
          this.service.findSectionsForStudent()
            .then((sections) => this.studentSections = sections).then(() => {
            const ids = this.sections.map((section) => section._id);
            this.enrollAllowed = !(this.studentSections.filter(sect =>
              ids.includes(sect.section._id)).length > 0);
          });
        }
      );
    }
  }


  enroll(section) {
    this.service
      .enrollStudentInSection(section._id)
      .then(() =>
        this.service.findSectionsForCourse(this.courseId))
      .then(sections => this.sections = sections).then(() =>
      this.service.findSectionsForStudent().then((sections) =>
        this.studentSections = sections)).then(() => {
      const ids = this.sections.map((sec) => sec._id);
      this.enrollAllowed = !(this.studentSections.filter(sect =>
        ids.includes(sect.section._id)).length > 0);
    });
  }

  unenroll(section) {
    this.service
      .unenrollStudentInSection(section._id).then(() =>
      this.service.findSectionsForCourse(this.courseId))
      .then(sections => this.sections = sections).then(() =>
      this.service.findSectionsForStudent().then((sections) =>
        this.studentSections = sections)).then(() => {
      const ids = this.sections.map((sec) => sec._id);
      this.enrollAllowed = !(this.studentSections.filter(sect =>
        ids.includes(sect.section._id)).length > 0);
    });
  }

  checkIfSectionAlreadyEnrolled(section) {
    return this.studentSections.filter(sect => sect.section._id === section._id).length > 0;
  }

  ngOnInit() {

    this.userService.findLoggedUser().then((user) => this.user = user);

  }

}
