import {Component, OnInit} from '@angular/core';
import {User} from './../../models/user.model.client';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {SectionService} from '../../services/section.service';
import {CourseService} from '../../services/course.service';
import {Course} from '../../models/course.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService, private service: SectionService,
              private router: Router, private courseService: CourseService) {
  }

  user: User = new User();
  studentSections = [];
  // courses: Course[] = [];
  courseMap = {};

  update(user: User) {
    this.userService.updateUserProfile(user);
  }

  logout() {
    this.userService.logout().then(() =>
      this.router.navigate(['login']));
  }

  ngOnInit() {
    this.userService.findLoggedUser().then(
      user => this.user = user).then(() =>
      this.service.findSectionsForStudent()).then((sections) =>
      this.studentSections = sections).then(() => this.courseService.findAllCourses().then(courses => {

      for (const key in courses) {
        if (courses.hasOwnProperty(key)) {
          this.courseMap[courses[key].id] = courses[key];
        }
      }
    }));
  }

  unenroll(section) {
    this.service
      .unenrollStudentInSection(section._id).then(() =>
      this.service.findSectionsForStudent().then((sections) =>
        this.studentSections = sections));
  }

}
