import {Component, OnInit} from '@angular/core';
import {SectionService} from '../../services/section.service';
import {Course} from '../../models/course.model.client';
import {CourseService} from '../../services/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Section} from '../../models/section.model.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: SectionService, private courseService: CourseService,
              private router: Router, private route: ActivatedRoute) {
    // this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }

  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];
  course: Course;
  courses: Course[] = [];
  courseSection = {};
  edit = false;
  editSectionId = '';

  loadSections() {

    this.courseSection = {};
    this.service.findAllSections().then((sections) => {

      for (const s in sections) {
        if (this.courseSection[sections[s].courseId] == null) {
          this.courseSection[sections[s].courseId] = [];
          this.courseSection[sections[s].courseId].push(sections[s]);
        } else {
          this.courseSection[sections[s].courseId].push(sections[s]);
        }
      }
      console.log(this.courseSection);
    });

    // this.sectionName = '';
    // this.seats = '';

  }

  createSection(courseId, sectionName, seats, courseName) {
    console.log(sectionName, seats);
    if (sectionName == null || sectionName === '') {
      sectionName = courseName + ' Section ' + 1; // (this.courseSection[courseId].length + 1 ) ;
    }
    if (seats == null || seats === '') {
      seats = '0';
    }

    this
      .service
      .createSection(courseId, sectionName, seats)
      .then(() => {
        this.loadSections();
      });
  }


  updateSection(sectionId, sectionName, seats, oldSection) {
    console.log(sectionName, seats);
    const newIncrement = oldSection.maxSeats - seats;
    var newAvailable = oldSection.availableSeats - newIncrement;
    if (newAvailable < 0) {
      newAvailable = 0;
    }
    const section = new Section();
    section.name = sectionName;
    section.maxSeats = seats;
    section.availableSeats = newAvailable;
    this.service.updateSection(sectionId, section).then(() => this.loadSections()).then(() => {
      this.edit = false;
      this.editSectionId = '';
      this.sectionName = '';
      this.seats = '';
    });
  }

  // enroll(section) {
  //   this.service
  //     .enrollStudentInSection(section._id)
  //     .then(() => {
  //       this.router.navigate(['profile']);
  //     });
  // }

  deleteSection(sectionId) {
    this.service.deleteSection(sectionId).then(() => this.loadSections());
  }


  ngOnInit() {
    this.courseService.findAllCourses().then(courses => this.courses = courses).then(
      () => this.service.findAllSections().then((sections) => {

        for (const s in sections) {
          if (this.courseSection[sections[s].courseId] == null) {
            this.courseSection[sections[s].courseId] = [];
            this.courseSection[sections[s].courseId].push(sections[s]);
          } else {
            this.courseSection[sections[s].courseId].push(sections[s]);
          }
        }
        console.log(this.courseSection);
      })
    );
  }
}
