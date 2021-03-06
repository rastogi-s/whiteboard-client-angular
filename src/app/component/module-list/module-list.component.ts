import {Component, OnInit} from '@angular/core';
import {ModuleService} from '../../services/module.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private service: ModuleService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  courseId;
  moduleId;
  modules = [];

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.loadModules(this.courseId);
  }

  loadModules(courseId) {
    this.courseId = courseId;
    this.service.findAllModulesForCourse(courseId)
      .then(modules => this.modules = modules);
  }

  ngOnInit() {
  }

}
