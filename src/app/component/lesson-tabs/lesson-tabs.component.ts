import {Component, OnInit} from '@angular/core';
import {LessonService} from '../../services/lesson.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../models/course.model.client';
import {LessonModelClient} from '../../models/lesson.model.client';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  courseId;
  moduleId;
  lessonId;
  lessons: LessonModelClient[] = [];

  constructor(private service: LessonService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.loadLessons();
  }

  loadLessons() {
    this.service.findAllLessonsForModule(this.courseId, this.moduleId)
      .then(lessons => this.lessons = lessons);

    console.log(this.lessons);
  }

  ngOnInit() {
  }

}
