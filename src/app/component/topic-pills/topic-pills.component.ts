import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicService} from '../../services/topic.service';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  courseId;
  moduleId;
  lessonId;
  topicId;
  topics;

  constructor(private service: TopicService,
              private route: ActivatedRoute) {
    this.topics = [];
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.topicId = params['topicId'];
    this.loadTopics();
  }

  loadTopics() {
    this.service.findAllTopicsForLesson(this.courseId, this.moduleId, this.lessonId)
      .then(topics => this.topics = topics);
  }

  ngOnInit() {
    this.topics = [];
  }

}
