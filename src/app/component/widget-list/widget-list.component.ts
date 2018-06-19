import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../services/widget.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private service: WidgetService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setContext(params));
  }

  context;
  widgets = [];
  courseId;
  moduleId;
  lessonId;
  topicId;

  setContext(params) {
    this.context = params;
    this.loadWidgets(params.courseId, params.moduleId, params.lessonId, params.topicId);
  }

  sortByWidgetOrder(array) {
    array.sort(function (p, q) {
      return p.orderOfWidget - q.orderOfWidget;
    });

    return array;
  }

  loadWidgets(courseId, moduleId, lessonId, topicId) {
    this.widgets = [];
    if (courseId !== undefined && moduleId !== undefined && lessonId !== undefined && topicId !== undefined) {
      this.service.findAllWidgetsForTopics(courseId, moduleId, lessonId, topicId).then(widgets => {
        if (widgets.length > 0) {
          this.widgets = this.sortByWidgetOrder(widgets);
        }
      });
    }
  }

  ngOnInit() {
  }

}
