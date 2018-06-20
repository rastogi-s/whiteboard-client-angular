(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-white-board></app-white-board>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/register/register.component */ "./src/app/component/register/register.component.ts");
/* harmony import */ var _component_white_board_white_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/white-board/white-board.component */ "./src/app/component/white-board/white-board.component.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/profile/profile.component */ "./src/app/component/profile/profile.component.ts");
/* harmony import */ var _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/admin/admin.component */ "./src/app/component/admin/admin.component.ts");
/* harmony import */ var _component_course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/course-grid/course-grid.component */ "./src/app/component/course-grid/course-grid.component.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_module_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/module.service */ "./src/app/services/module.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_topic_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/topic.service */ "./src/app/services/topic.service.ts");
/* harmony import */ var _services_lesson_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/lesson.service */ "./src/app/services/lesson.service.ts");
/* harmony import */ var _services_widget_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _component_course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/course-viewer/course-viewer.component */ "./src/app/component/course-viewer/course-viewer.component.ts");
/* harmony import */ var _component_module_list_module_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/module-list/module-list.component */ "./src/app/component/module-list/module-list.component.ts");
/* harmony import */ var _component_lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/lesson-tabs/lesson-tabs.component */ "./src/app/component/lesson-tabs/lesson-tabs.component.ts");
/* harmony import */ var _component_topic_pills_topic_pills_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/topic-pills/topic-pills.component */ "./src/app/component/topic-pills/topic-pills.component.ts");
/* harmony import */ var _component_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/widget-list/widget-list.component */ "./src/app/component/widget-list/widget-list.component.ts");
/* harmony import */ var _component_section_list_section_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/section-list/section-list.component */ "./src/app/component/section-list/section-list.component.ts");
/* harmony import */ var _services_course_privacy_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/course-privacy.service */ "./src/app/services/course-privacy.service.ts");
/* harmony import */ var _component_faculty_access_faculty_access_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/faculty-access/faculty-access.component */ "./src/app/component/faculty-access/faculty-access.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _component_white_board_white_board_component__WEBPACK_IMPORTED_MODULE_6__["WhiteBoardComponent"],
                _component_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
                _component_course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_10__["CourseGridComponent"],
                _component_course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_17__["CourseViewerComponent"],
                _component_module_list_module_list_component__WEBPACK_IMPORTED_MODULE_18__["ModuleListComponent"],
                _component_lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_19__["LessonTabsComponent"],
                _component_topic_pills_topic_pills_component__WEBPACK_IMPORTED_MODULE_20__["TopicPillsComponent"],
                _component_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_21__["WidgetListComponent"],
                _component_section_list_section_list_component__WEBPACK_IMPORTED_MODULE_22__["SectionListComponent"],
                _component_faculty_access_faculty_access_component__WEBPACK_IMPORTED_MODULE_24__["FacultyAccessComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [
                _services_course_service__WEBPACK_IMPORTED_MODULE_11__["CourseService"],
                _services_module_service__WEBPACK_IMPORTED_MODULE_12__["ModuleService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
                _services_topic_service__WEBPACK_IMPORTED_MODULE_14__["TopicService"],
                _services_lesson_service__WEBPACK_IMPORTED_MODULE_15__["LessonService"],
                _services_widget_service__WEBPACK_IMPORTED_MODULE_16__["WidgetService"],
                _services_course_privacy_service__WEBPACK_IMPORTED_MODULE_23__["CoursePrivacyService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/register/register.component */ "./src/app/component/register/register.component.ts");
/* harmony import */ var _component_course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/course-grid/course-grid.component */ "./src/app/component/course-grid/course-grid.component.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/profile/profile.component */ "./src/app/component/profile/profile.component.ts");
/* harmony import */ var _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/admin/admin.component */ "./src/app/component/admin/admin.component.ts");
/* harmony import */ var _component_course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/course-viewer/course-viewer.component */ "./src/app/component/course-viewer/course-viewer.component.ts");
/* harmony import */ var _component_section_list_section_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/section-list/section-list.component */ "./src/app/component/section-list/section-list.component.ts");
/* harmony import */ var _component_faculty_access_faculty_access_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/faculty-access/faculty-access.component */ "./src/app/component/faculty-access/faculty-access.component.ts");









var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _component_course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_2__["CourseGridComponent"] },
    { path: 'login', component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _component_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] },
    { path: 'admin', component: _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
    { path: 'profile', component: _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'faculty', component: _component_faculty_access_faculty_access_component__WEBPACK_IMPORTED_MODULE_8__["FacultyAccessComponent"] },
    { path: 'course/:courseId', component: _component_course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_6__["CourseViewerComponent"] },
    { path: 'course/:courseId/section', component: _component_section_list_section_list_component__WEBPACK_IMPORTED_MODULE_7__["SectionListComponent"] },
    { path: 'course/:courseId/module/:moduleId', component: _component_course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_6__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: _component_course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_6__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: _component_course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_6__["CourseViewerComponent"] },
    { path: '**', component: _component_course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_2__["CourseGridComponent"] } // last
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/component/admin/admin.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/admin/admin.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/admin/admin.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/admin/admin.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row navbar navbar-expand-lg  bg-dark text-light m-3\">\n  <div class=\"col text-center\">\n    <h3>Course List</h3>\n  </div>\n</div>\n\n<div *ngFor=\"let course of courses\" class=\"m-3\">\n  <div class=\"row bg-light text-dark p-2 mx-3\" data-toggle=\"collapse\"\n       [attr.data-target]=\" '#'+ course.id\">\n    <div class=\"col\">\n      <h5>{{course.title}}</h5>\n    </div>\n    <div class=\"col\">\n      <i class=\"btn fa fa-angle-down fa-2x float-right p-0 navbar-toggler\" data-toggle=\"collapse\"\n         [attr.data-target]=\" '#'+ course.id \"> </i>\n    </div>\n  </div>\n\n  <div class=\"collapse navbar-collapse bg-dark text-dark p-3 mx-3 \" id={{course.id}}>\n    <form class=\"form-inline\" #formInline=\"ngForm\">\n      <input [(ngModel)]=\"sectionName\"\n             placeholder=\"Section Name\" name=\"sectionName\"\n             class=\"form-control mr-4\">\n      <input [(ngModel)]=\"seats\"\n             placeholder=\"Seats available\" name=\"seats\"\n             class=\"form-control mr-4\">\n      <button (click)=\"createSection(course.id, sectionName, seats, course.title); formInline.reset(); \"\n              class=\"btn btn-success\">\n        Add Section\n      </button>\n    </form>\n    <!--{{edit && editCourseId==course.id}}-->\n    <ul class=\"list-group mt-3\">\n      <li class=\"list-group-item bg-primary text-light\">\n        <div class=\"row\">\n          <div class=\"col\">\n            Sections\n          </div>\n          <div class=\"col\">\n            Max Seats\n          </div>\n          <div class=\"col\">\n            Available Seats\n          </div>\n          <div class=\"col\">\n\n          </div>\n        </div>\n      </li>\n      <li *ngFor=\"let section of courseSection[course.id]\"\n          class=\"list-group-item \">\n        <div class=\"row\" [hidden]=\"(edit && editSectionId==section._id)\">\n          <div class=\"col\" >\n            {{section.name}}\n          </div>\n          <div class=\"col\">\n            {{section.maxSeats}}\n          </div>\n          <div class=\"col\">\n            {{section.availableSeats}}\n          </div>\n          <div class=\"col\">\n            <i class=\"fa fa-trash btn float-right\" (click)=\"deleteSection(section._id)\"></i>\n            <i class=\"fa fa-pencil-alt btn float-right\" (click)=\"edit=true;\n             editSectionId=section._id; sectionName=section.name; seats = section.maxSeats \"></i>\n            <i class=\"fa fa-check btn float-right\" (click)=\"updateSection(section._id, sectionName, seats)\"></i>\n          </div>\n        </div>\n        <div class=\"row\" [hidden]=\"!(edit && editSectionId==section._id)\">\n          <div class=\"col\" >\n            <input [(ngModel)]=\"sectionName\"\n                   placeholder=\"Section Name\" name=\"sectionName\"\n                   class=\"form-control\" >\n          </div>\n          <div class=\"col\">\n            <input [(ngModel)]=\"seats\"\n                   placeholder=\"Seats available\"  name=\"seats\"\n                   class=\"form-control\">\n          </div>\n          <div class=\"col\">\n            {{section.availableSeats}}\n          </div>\n          <div class=\"col\">\n            <i class=\"fa fa-trash btn float-right disabled\" ></i>\n            <i class=\"fa fa-times btn float-right\"  (click)=\"edit=false; editSectionId=''; sectionName='';\n             seats = '';\" ></i>\n            <i class=\"fa fa-check btn float-right\" (click)=\"updateSection(section._id, sectionName, seats, section);\n                 sectionName=''; seats = '';\"></i>\n          </div>\n        </div>\n\n\n\n        <!--<i class=\"fa fa-pencil btn float-right\" (click)=\"edit(section._id)\"></i>-->\n      </li>\n    </ul>\n\n    <!--*ngFor=\"let section of fetchSections(course.id)\"-->\n    <!--<div class=\"row\" >-->\n    <!--<div class=\"col\"></div>-->\n    <!--</div>-->\n  </div>\n</div>\n\n\n<!--<div class=\"container\">-->\n\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/component/admin/admin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/admin/admin.component.ts ***!
  \****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_section_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/section.service */ "./src/app/services/section.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_section_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/section.model.client */ "./src/app/models/section.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = /** @class */ (function () {
    function AdminComponent(service, courseService, router, route) {
        this.service = service;
        this.courseService = courseService;
        this.router = router;
        this.route = route;
        this.sectionName = '';
        this.seats = '';
        this.courseId = '';
        this.sections = [];
        this.courses = [];
        this.courseSection = {};
        this.edit = false;
        this.editSectionId = '';
        // this.route.params.subscribe(params => this.loadSections(params['courseId']));
    }
    AdminComponent.prototype.loadSections = function () {
        var _this = this;
        this.courseSection = {};
        this.service.findAllSections().then(function (sections) {
            for (var s in sections) {
                if (_this.courseSection[sections[s].courseId] == null) {
                    _this.courseSection[sections[s].courseId] = [];
                    _this.courseSection[sections[s].courseId].push(sections[s]);
                }
                else {
                    _this.courseSection[sections[s].courseId].push(sections[s]);
                }
            }
        });
        // this.sectionName = '';
        // this.seats = '';
    };
    AdminComponent.prototype.createSection = function (courseId, sectionName, seats, courseName) {
        var _this = this;
        if (sectionName == null || sectionName === '') {
            sectionName = courseName + ' Section ' + 1; // (this.courseSection[courseId].length + 1 ) ;
        }
        if (seats == null || seats === '') {
            seats = '0';
        }
        this
            .service
            .createSection(courseId, sectionName, seats)
            .then(function () {
            _this.loadSections();
        });
    };
    AdminComponent.prototype.updateSection = function (sectionId, sectionName, seats, oldSection) {
        var _this = this;
        var newIncrement = oldSection.maxSeats - seats;
        var newAvailable = oldSection.availableSeats - newIncrement;
        if (newAvailable < 0) {
            newAvailable = 0;
        }
        var section = new _models_section_model_client__WEBPACK_IMPORTED_MODULE_4__["Section"]();
        section.name = sectionName;
        section.maxSeats = seats;
        section.availableSeats = newAvailable;
        this.service.updateSection(sectionId, section).then(function () { return _this.loadSections(); }).then(function () {
            _this.edit = false;
            _this.editSectionId = '';
            _this.sectionName = '';
            _this.seats = '';
        });
    };
    // enroll(section) {
    //   this.service
    //     .enrollStudentInSection(section._id)
    //     .then(() => {
    //       this.router.navigate(['profile']);
    //     });
    // }
    AdminComponent.prototype.deleteSection = function (sectionId) {
        var _this = this;
        this.service.deleteSection(sectionId).then(function () { return _this.loadSections(); });
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.findAllCourses().then(function (courses) { return _this.courses = courses; }).then(function () { return _this.service.findAllSections().then(function (sections) {
            for (var s in sections) {
                if (_this.courseSection[sections[s].courseId] == null) {
                    _this.courseSection[sections[s].courseId] = [];
                    _this.courseSection[sections[s].courseId].push(sections[s]);
                }
                else {
                    _this.courseSection[sections[s].courseId].push(sections[s]);
                }
            }
        }); });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/component/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/component/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service__WEBPACK_IMPORTED_MODULE_1__["SectionService"], _services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/component/course-grid/course-grid.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/course-grid/course-grid.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/course-grid/course-grid.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/course-grid/course-grid.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row navbar navbar-expand-lg  bg-dark text-light m-3\" [hidden]=\"!(registeredCourses.length > 0)\">\r\n  <div class=\"col text-center\">\r\n    <h3>Registered Courses</h3>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"p-5 bg-light rounded \" [hidden]=\"!(registeredCourses.length > 0)\">\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let course of registeredCourses\" class=\"col-sm-3\" >\r\n      <div class=\"card mt-2 mb-2\">\r\n        <img class=\"card-img-top\" src=\"../../../assets/images/image1.jpg\" alt=\"Card Image Cap\"/>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{course.title}}</h5>\r\n          <small class=\"text-muted\" [hidden]=\"!checkPrivacy(course.id)\" ># private</small>\r\n          <small class=\"text-muted\" [hidden]=\"checkPrivacy(course.id)\" ># public</small>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a routerLink=\"/course/{{course.id}}/section\" class=\"btn btn-dark float-left \" href=\"#\">Enroll</a>\r\n          <a routerLink=\"/course/{{course.id}}\" class=\"btn btn-dark float-right \" href=\"#\">View</a>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row navbar navbar-expand-lg  bg-dark text-light m-3\" [hidden]=\"!(registeredCourses.length > 0)\" >\r\n  <div class=\"col text-center\">\r\n    <h3>Non Registered Courses</h3>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"p-5 bg-light rounded \">\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let course of nonRegisteredCourses\" class=\"col-sm-3\">\r\n      <div class=\"card mt-2 mb-2\">\r\n        <img class=\"card-img-top\" src=\"../../../assets/images/image1.jpg\" alt=\"Card Image Cap\"/>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{course.title}}</h5>\r\n          <small class=\"text-muted\" [hidden]=\"!checkPrivacy(course.id)\" ># private</small>\r\n          <small class=\"text-muted\" [hidden]=\"checkPrivacy(course.id)\" ># public</small>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button  routerLink=\"/course/{{course.id}}/section\" class=\"btn btn-dark float-left \" href=\"#\">Enroll</button>\r\n          <button [disabled]=\"checkPrivacy(course.id)\" routerLink=\"/course/{{course.id}}\"\r\n                  class=\"btn btn-dark float-right\" href=\"#\" >View</button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/course-grid/course-grid.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/course-grid/course-grid.component.ts ***!
  \****************************************************************/
/*! exports provided: CourseGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseGridComponent", function() { return CourseGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_section_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/section.service */ "./src/app/services/section.service.ts");
/* harmony import */ var _services_course_privacy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/course-privacy.service */ "./src/app/services/course-privacy.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CourseGridComponent = /** @class */ (function () {
    function CourseGridComponent(service, userService, sectionService, coursePrivacyService) {
        this.service = service;
        this.userService = userService;
        this.sectionService = sectionService;
        this.coursePrivacyService = coursePrivacyService;
        this.courses = [];
        this.registeredCourseIds = [];
        this.registeredCourses = [];
        this.nonRegisteredCourses = [];
        this.studentSections = [];
        this.privateCourses = [];
    }
    CourseGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses().then(function (courses) { return _this.courses = courses; }).then(function () {
            return _this.sectionService.findSectionsForStudent().then(function (sections) {
                if (sections.length > 0) {
                    _this.studentSections = sections;
                    _this.registeredCourseIds = _this.studentSections.map(function (sect) { return sect.section.courseId; });
                    _this.registeredCourses = _this.courses.filter(function (course) { return _this.registeredCourseIds.includes(course.id.toString()); });
                    _this.nonRegisteredCourses = _this.courses.filter(function (course) { return (!_this.registeredCourseIds.includes(course.id.toString())); });
                }
                else {
                    _this.nonRegisteredCourses = _this.courses;
                }
            });
        }).then(function () { return _this.coursePrivacyService.getAllPrivateCourses().then(function (privateCourse) {
            return _this.privateCourses = privateCourse;
        }); });
    };
    CourseGridComponent.prototype.checkPrivacy = function (courseId) {
        return this.privateCourses.filter(function (records) { return records.courseId === courseId.toString(); }).length > 0;
    };
    CourseGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-grid',
            template: __webpack_require__(/*! ./course-grid.component.html */ "./src/app/component/course-grid/course-grid.component.html"),
            styles: [__webpack_require__(/*! ./course-grid.component.css */ "./src/app/component/course-grid/course-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_section_service__WEBPACK_IMPORTED_MODULE_3__["SectionService"],
            _services_course_privacy_service__WEBPACK_IMPORTED_MODULE_4__["CoursePrivacyService"]])
    ], CourseGridComponent);
    return CourseGridComponent;
}());



/***/ }),

/***/ "./src/app/component/course-viewer/course-viewer.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/course-viewer/course-viewer.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/course-viewer/course-viewer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/course-viewer/course-viewer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark mb-3\">\r\n  <i class=\"btn fa fa-2x fa-times text-light mr-3\" routerLink=\"/home\"></i>\r\n  <a class=\"navbar-brand\" href=\"#\">{{course.title}}</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</nav>\r\n\r\n<app-module-list></app-module-list>\r\n"

/***/ }),

/***/ "./src/app/component/course-viewer/course-viewer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/course-viewer/course-viewer.component.ts ***!
  \********************************************************************/
/*! exports provided: CourseViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewerComponent", function() { return CourseViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/course.service */ "./src/app/services/course.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseViewerComponent = /** @class */ (function () {
    function CourseViewerComponent(courseService, route) {
        var _this = this;
        this.courseService = courseService;
        this.route = route;
        this.course = { id: '1', title: 'dummy' };
        this.route.params.subscribe(function (params) { return _this.courseId = params['courseId']; });
        if (this.courseId != null && this.courseId !== '') {
            this.courseService.findCourseById(this.courseId).
                then(function (course) { return _this.course = course; });
        }
    }
    CourseViewerComponent.prototype.ngOnInit = function () {
    };
    CourseViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-viewer',
            template: __webpack_require__(/*! ./course-viewer.component.html */ "./src/app/component/course-viewer/course-viewer.component.html"),
            styles: [__webpack_require__(/*! ./course-viewer.component.css */ "./src/app/component/course-viewer/course-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CourseViewerComponent);
    return CourseViewerComponent;
}());



/***/ }),

/***/ "./src/app/component/faculty-access/faculty-access.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/component/faculty-access/faculty-access.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/faculty-access/faculty-access.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/faculty-access/faculty-access.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row navbar navbar-expand-lg  bg-dark text-light m-3\" >\n  <div class=\"col text-center\">\n    <h3>Course List</h3>\n  </div>\n</div>\n\n<div class=\"row bg-light text-dark p-2 mx-3 mb-1\" *ngFor=\"let course of courses\">\n  <div class=\"col\">\n    <h5>{{course.title}}</h5>\n  </div>\n  <div class=\"col\" >\n    <h5 [hidden]=\"!checkPrivacy(course.id)\"># private</h5>\n    <h5 [hidden]=\"checkPrivacy(course.id)\"># public</h5>\n  </div>\n\n  <div class=\"col\">\n    <button (click)=\"makePrivate(course.id)\"\n            class=\"float-right btn btn-danger\" [hidden]=\"checkPrivacy(course.id)\">Make Private</button>\n    <button (click)=\"makePublic(course.id)\"\n            class=\"float-right btn btn-success\" [hidden]=\"!checkPrivacy(course.id)\">Make Public</button>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/component/faculty-access/faculty-access.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/faculty-access/faculty-access.component.ts ***!
  \**********************************************************************/
/*! exports provided: FacultyAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyAccessComponent", function() { return FacultyAccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_course_privacy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/course-privacy.service */ "./src/app/services/course-privacy.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FacultyAccessComponent = /** @class */ (function () {
    function FacultyAccessComponent(courseService, coursePrivacy) {
        this.courseService = courseService;
        this.coursePrivacy = coursePrivacy;
        this.courses = [];
        this.privateCourseIds = [];
    }
    FacultyAccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.findAllCourses().then(function (courses) {
            return _this.courses = courses;
        }).then(function () {
            return _this.coursePrivacy.getAllPrivateCourses().then(function (privateCourses) {
                return _this.privateCourseIds = privateCourses;
            });
        });
    };
    FacultyAccessComponent.prototype.makePublic = function (courseId) {
        var _this = this;
        this.coursePrivacy.makeCoursePublic(courseId).then(function () {
            return _this.coursePrivacy.getAllPrivateCourses().then(function (privateCourses) {
                return _this.privateCourseIds = privateCourses;
            });
        });
    };
    FacultyAccessComponent.prototype.makePrivate = function (courseId) {
        var _this = this;
        this.coursePrivacy.makeCoursePrivate(courseId).then(function () {
            return _this.coursePrivacy.getAllPrivateCourses().then(function (privateCourses) {
                return _this.privateCourseIds = privateCourses;
            });
        });
    };
    FacultyAccessComponent.prototype.checkPrivacy = function (courseId) {
        return this.privateCourseIds.filter(function (records) { return records.courseId === courseId.toString(); }).length > 0;
    };
    FacultyAccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faculty-access',
            template: __webpack_require__(/*! ./faculty-access.component.html */ "./src/app/component/faculty-access/faculty-access.component.html"),
            styles: [__webpack_require__(/*! ./faculty-access.component.css */ "./src/app/component/faculty-access/faculty-access.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"], _services_course_privacy_service__WEBPACK_IMPORTED_MODULE_2__["CoursePrivacyService"]])
    ], FacultyAccessComponent);
    return FacultyAccessComponent;
}());



/***/ }),

/***/ "./src/app/component/lesson-tabs/lesson-tabs.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/lesson-tabs/lesson-tabs.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.wbdv {\r\n  background-color: #b9bbbe;\r\n  border-color: #b9bbbe;\r\n  color:white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/lesson-tabs/lesson-tabs.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/lesson-tabs/lesson-tabs.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\" >\n  <li *ngFor=\"let lesson of lessons\"\n      class=\"nav-item\">\n    <a class=\"nav-link wbdv\"\n       [ngClass]=\"{'active': lesson.id == lessonId}\"\n       routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lesson.id}}\">\n      {{lesson.title}}\n    </a>\n  </li>\n</ul>\n<app-topic-pills></app-topic-pills>\n"

/***/ }),

/***/ "./src/app/component/lesson-tabs/lesson-tabs.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/lesson-tabs/lesson-tabs.component.ts ***!
  \****************************************************************/
/*! exports provided: LessonTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTabsComponent", function() { return LessonTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lesson_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/lesson.service */ "./src/app/services/lesson.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LessonTabsComponent = /** @class */ (function () {
    function LessonTabsComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.lessons = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    LessonTabsComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.loadLessons();
    };
    LessonTabsComponent.prototype.loadLessons = function () {
        var _this = this;
        if (this.courseId !== undefined && this.moduleId !== undefined) {
            this.service.findAllLessonsForModule(this.courseId, this.moduleId)
                .then(function (lessons) { return _this.lessons = lessons; });
        }
    };
    LessonTabsComponent.prototype.ngOnInit = function () {
    };
    LessonTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson-tabs',
            template: __webpack_require__(/*! ./lesson-tabs.component.html */ "./src/app/component/lesson-tabs/lesson-tabs.component.html"),
            styles: [__webpack_require__(/*! ./lesson-tabs.component.css */ "./src/app/component/lesson-tabs/lesson-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lesson_service__WEBPACK_IMPORTED_MODULE_1__["LessonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LessonTabsComponent);
    return LessonTabsComponent;
}());



/***/ }),

/***/ "./src/app/component/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/login/login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.alert{*/\r\n  /*display: none;*/\r\n  /*}*/\r\n  .mandatory{\r\n  color:red;\r\n}\r\n  .needs-validation {\r\n  width: 100%;\r\n  max-width: 800px;\r\n  padding: 15px;\r\n  margin: auto;\r\n  margin-top: 100px;\r\n}\r\n  .ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n  .ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/component/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n  <div class=\"container con\">\r\n    <form class=\"needs-validation\" #form=\"ngForm\">\r\n      <div class=\"alert alert-danger\" role=\"alert\" [hidden]=\"!badUserNamePass\">\r\n        Entered a wrong username or password!!\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"username\" class=\"col-sm-2 col-form-label\">Username<span class=\"mandatory\">*</span></label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input type=\"text\" placeholder=\"Xyz\" id=\"username\" class=\"form-control\"\r\n                 required [(ngModel)]=\"username\" name=\"username\" #userName=\"ngModel\" >\r\n          <div [hidden]=\"userName.valid || userName.pristine\"  class=\"mt-2 alert alert-danger\">\r\n            Username required!!\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"password\" class=\"col-sm-2 col-form-label\">Password<span class=\"mandatory\">*</span></label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input type=\"password\" placeholder=\"123qwe#$\" id=\"password\" class=\"form-control\" required\r\n                  [(ngModel)]=\"password\" name=\"password\" #pass=\"ngModel\">\r\n          <div [hidden]=\"pass.valid || pass.pristine\" class=\"mt-2 alert alert-danger\">\r\n            Password required!!\r\n          </div>\r\n          <div class=\"invalid-feedback invalid-password\">\r\n            Please enter a valid password!!\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <span class=\"col-sm-2\"></span>\r\n        <div class=\"col-sm-10 d-inline-block\">\r\n          <div class=\"py-1\">\r\n            <button type=\"button\" class=\"btn btn-success form-control\" id=\"login\"\r\n                    (click)=\"login(username,password);  form.reset();\" [disabled]=\"!form.form.valid\"\r\n            >Sign In</button>\r\n          </div>\r\n          <!--<div class=\"py-1 d-inline\">-->\r\n            <!--<a href=\"\" class=\"float-left forgot-pass\" data-toggle=\"modal\" data-target=\"#forgotPassword\">Forgot-->\r\n              <!--Password?</a>-->\r\n            <!--&lt;!&ndash;<a href=\"../register/register.template.client.html\" class=\"float-right\">Sign Up</a>&ndash;&gt;-->\r\n          <!--</div>-->\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <!-- Modal -->\r\n    <div class=\"modal fade\" id=\"forgotPassword\" tabindex=\"-1\" role=\"dialog\"\r\n         aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header \">\r\n            <h5 class=\"modal-title\" id=\"modalTitle\">Forgot Password</h5>\r\n\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <h6 id=\"modal-text\" class=\"py-2\">Enter valid Username and Email Id to Reset password</h6>\r\n            <form class=\"needs-validation\" novalidate>\r\n              <div class=\"form-group row\">\r\n                <label for=\"usernameVerify\" class=\"col-sm-2 col-form-label\">Username</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text\" placeholder=\"Username\" id=\"usernameVerify\" class=\"form-control\"\r\n                         required>\r\n\r\n                  <div class=\"invalid-feedback invalid-username-verify\">\r\n                    Please enter a valid username!!\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"resetEmail\" class=\"col-sm-2 col-form-label\">Email</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"email\" placeholder=\"abc@xyz.com\" id=\"resetEmail\" class=\"form-control\"\r\n                         required>\r\n\r\n                  <div class=\"invalid-feedback invalid-username-verify\">\r\n                    Please enter a valid email!!\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary close-modal\" data-dismiss=\"modal\">Close</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" id=\"sendEmail\">Send Email</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.badUserNamePass = false;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.userService
            .login(username, password)
            .then(function (user) {
            if (user != null) {
                if (user.username === 'admin') {
                    _this.router.navigate(['admin']);
                }
                else if (user.username === 'faculty') {
                    _this.router.navigate(['faculty']);
                }
                else {
                    _this.router.navigate(['profile']);
                }
            }
            else {
                _this.badUserNamePass = true;
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/component/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/component/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/component/module-list/module-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/module-list/module-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.wbdv {\r\n  background-color: #b9bbbe;\r\n  border-color: #b9bbbe;\r\n}\r\n\r\n.active.wbdv a {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/module-list/module-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/module-list/module-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-4 bg-light p-3 rounded\">\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item bg-dark text-light\">Modules</li>\r\n      <li [ngClass]=\"{'active': module.id == moduleId}\" *ngFor=\"let module of modules\"\r\n          class=\"list-group-item wbdv\">\r\n        <a routerLink=\"/course/{{courseId}}/module/{{module.id}}\">\r\n          {{module.title}}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"col-8 bg-light p-3 rounded\">\r\n    <app-lesson-tabs></app-lesson-tabs>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/module-list/module-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/module-list/module-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ModuleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleListComponent", function() { return ModuleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_module_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/module.service */ "./src/app/services/module.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModuleListComponent = /** @class */ (function () {
    function ModuleListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.modules = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    ModuleListComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.loadModules(this.courseId);
    };
    ModuleListComponent.prototype.loadModules = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.service.findAllModulesForCourse(courseId)
            .then(function (modules) { return _this.modules = modules; });
    };
    ModuleListComponent.prototype.ngOnInit = function () {
    };
    ModuleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-module-list',
            template: __webpack_require__(/*! ./module-list.component.html */ "./src/app/component/module-list/module-list.component.html"),
            styles: [__webpack_require__(/*! ./module-list.component.css */ "./src/app/component/module-list/module-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_module_service__WEBPACK_IMPORTED_MODULE_1__["ModuleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ModuleListComponent);
    return ModuleListComponent;
}());



/***/ }),

/***/ "./src/app/component/profile/profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/profile/profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.needs-validation {\r\n  width: 100%;\r\n  /*max-width: 800px;*/\r\n  padding: 15px;\r\n  margin: auto;\r\n  margin-top: 40px;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"container\">\n    <!--<div class=\"alert alert-success message\" role=\"alert\">-->\n      <!--<strong class=\"message-success\">Profile successfully updated</strong>-->\n    <!--</div>-->\n    <form class=\"needs-validation\" #formProf=\"ngForm\">\n      <div class=\"form-group row\">\n        <label for=\"username\" class=\"col-sm-2 col-form-label\">Username</label>\n\n        <div class=\"col-sm-10\">\n          <input type=\"text\" placeholder=\"Username\" disabled id=\"username\"\n                 [(ngModel)]=\"user.username\" name=\"username\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"firstname\" class=\"col-sm-2 col-form-label\">First Name</label>\n\n        <div class=\"col-sm-10\">\n          <input type=\"text\" placeholder=\"First Name\"\n                 [(ngModel)]=\"user.firstName\"\n                 id=\"firstname\" name=\"firstName\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"lastname\" class=\"col-sm-2 col-form-label\">Last Name</label>\n\n        <div class=\"col-sm-10\">\n          <input type=\"text\" placeholder=\"Last Name\"\n                 [(ngModel)]=\"user.lastName\" name=\"lastName\" id=\"lastname\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"phone\" class=\"col-sm-2 col-form-label\">Phone</label>\n\n        <div class=\"col-sm-10\">\n          <input type=\"tel\" placeholder=\"xxx-xxx-xxxx\" maxlength=\"12\" pattern=\"^\\d{3}-\\d{3}-\\d{4}$\"\n                 [(ngModel)]=\"user.phone\" id=\"phone\" name=\"phone\" class=\"form-control\" #phone=\"ngModel\">\n          <div [hidden]=\"phone.valid\" class=\"mt-2 alert alert-danger\">\n            Please enter a valid phone number!! (Format: xxx-xxx-xxxx)\n          </div>\n        </div>\n\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label>\n        <div class=\"col-sm-10\">\n          <input type=\"email\" placeholder=\"abc@xyz.com\" email=\"true\" [(ngModel)]=\"user.email\"\n                 id=\"email\" name=\"email\" class=\"form-control\" #email=\"ngModel\">\n          <div [hidden]=\"email.valid\" class=\"mt-2 alert alert-danger\">\n            Please enter a valid email!!\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n\n        <label for=\"address\" class=\"col-sm-2 col-form-label\">Address</label>\n\n        <div class=\"col-sm-10\">\n          <input [(ngModel)]=\"user.address\"\n                 placeholder=\"street city state\" name=\"address\" id=\"address\" class=\"form-control\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [hidden]=\"user.username=== 'admin' || user.username=== 'faculty' \">\n\n        <label for=\"lisOfCourses\" class=\"col-sm-2 col-form-label\">List of courses</label>\n\n        <div class=\"col-sm-10\">\n\n          <div class=\"row navbar  rounded m-1 navbar-expand-lg bg-secondary text-light mb-2\" id=\"lisOfCourses\">\n            <div class=\"col\">\n              <strong>Course</strong>\n            </div>\n            <div class=\"col\">\n              <strong>Section Name</strong>\n            </div>\n            <div class=\"col\">\n              <strong>Maximum # of Seats</strong>\n            </div>\n            <div class=\"col\">\n              <strong>Available Seats</strong>\n            </div>\n            <div class=\"col\">\n              <strong>Grade</strong>\n            </div>\n            <div class=\"col\">\n            </div>\n          </div>\n          <div class=\"row bg-light m-1 text-dark p-1 \" *ngFor=\"let section of studentSections\">\n            <div class=\"col\">\n              <a routerLink=\"/course/{{section.section.courseId}}/section\">\n                {{courseMap[section.section.courseId]!=undefined && courseMap[section.section.courseId].title}} </a>\n            </div>\n            <div class=\"col\">\n              {{section.section.name}}\n            </div>\n            <div class=\"col\">\n              {{section.section.maxSeats}}\n            </div>\n            <div class=\"col\">\n              {{section.section.availableSeats}}\n            </div>\n            <div class=\"col\">\n              {{section.grade}}\n            </div>\n            <div class=\"col\">\n              <button [disabled]=\"user==null\" class=\"float-right btn btn-danger\"\n                      (click)=\"unenroll(section.section)\">Un-Enroll\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--<div class=\"form-group row\">-->\n      <!--<label for=\"role\" class=\"col-sm-2 col-form-label\">Role</label>-->\n\n      <!--<div class=\"col-sm-10\">-->\n      <!--<select id=\"role\" class=\"form-control\" [(ngModel)]=\"user.role\" name=\"role\" >-->\n      <!--<option value=\"\" selected >Select a role</option>-->\n      <!--<option value=\"FACULTY\" >Faculty</option>-->\n      <!--<option value=\"STUDENT\">Student</option>-->\n      <!--<option value=\"ADMIN\">Admin</option>-->\n\n      <!--</select>-->\n\n      <!--</div>-->\n      <!--</div>-->\n      <!--<div class=\"form-group row\">-->\n\n      <!--<label for=\"dob\" class=\"col-sm-2 col-form-label\">Date Of Birth</label>-->\n\n      <!--<div class=\"col-sm-10\">-->\n      <!--<input type=\"date\" [(ngModel)]=\"user.dateOfBirth\"-->\n      <!--placeholder=\"1991-03-08\" name=\"dateOfBirth\" id=\"dob\" class=\"form-control\">-->\n      <!--</div>-->\n      <!--</div>-->\n\n      <div class=\"form-group row\">\n        <span class=\"col-sm-2\"></span>\n        <div class=\"col-sm-10 d-inline-block\">\n          <div class=\"py-1\">\n            <button type=\"button\" [disabled]=\"!formProf.form.valid\" class=\"btn btn-success form-control\" (click)=\"update(user)\" id=\"update\">Update\n            </button>\n          </div>\n          <div class=\"py-1\">\n            <button type=\"button\" class=\"btn btn-danger form-control\" (click)=\"logout()\" id=\"logout\">Logout</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/component/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/section.service */ "./src/app/services/section.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/course.service */ "./src/app/services/course.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, service, router, courseService) {
        this.userService = userService;
        this.service = service;
        this.router = router;
        this.courseService = courseService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.studentSections = [];
        // courses: Course[] = [];
        this.courseMap = {};
    }
    ProfileComponent.prototype.update = function (user) {
        this.userService.updateUserProfile(user);
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.findLoggedUser().then(function (user) { return _this.user = user; }).then(function () {
            return _this.service.findSectionsForStudent();
        }).then(function (sections) {
            return _this.studentSections = sections;
        }).then(function () { return _this.courseService.findAllCourses().then(function (courses) {
            for (var key in courses) {
                if (courses.hasOwnProperty(key)) {
                    _this.courseMap[courses[key].id] = courses[key];
                }
            }
        }); });
    };
    ProfileComponent.prototype.unenroll = function (section) {
        var _this = this;
        this.service
            .unenrollStudentInSection(section._id).then(function () {
            return _this.service.findSectionsForStudent().then(function (sections) {
                return _this.studentSections = sections;
            });
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/component/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/component/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_section_service__WEBPACK_IMPORTED_MODULE_4__["SectionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_course_service__WEBPACK_IMPORTED_MODULE_5__["CourseService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/component/register/register.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/register/register.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mandatory{\r\n  color:red;\r\n}\r\n\r\n.needs-validation {\r\n  width: 100%;\r\n  max-width: 900px;\r\n  padding: 15px;\r\n  margin: auto;\r\n  margin-top: 100px;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/register/register.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/register/register.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"container\">\n    <form class=\"needs-validation\" #form=\"ngForm\">\n      <!--<div class=\"alert alert-success\" role=\"alert\">-->\n      <!--<strong>User registered successfully!!</strong>-->\n      <!--</div>-->\n      <div class=\"alert alert-danger\" [hidden]=\"!usernameExists\">\n        Username already exists user another one !\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"username\" class=\"col-sm-2 col-form-label\">Username<span class=\"mandatory\">*</span></label>\n\n        <div class=\"col-sm-10\">\n          <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\"\n                 id=\"username\" class=\"form-control\" required #userName=\"ngModel\">\n\n\n          <div [hidden]=\"userName.valid || userName.pristine\" class=\"mt-2 alert alert-danger\">\n            Username required!!\n          </div>\n        </div>\n\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"password\" class=\"col-sm-2 col-form-label\">Password<span class=\"mandatory\">*</span></label>\n\n        <div class=\"col-sm-10\">\n          <input type=\"password\" placeholder=\"123qwe#$\" [(ngModel)]=\"password\" name=\"password\"\n                 id=\"password\" class=\"form-control\" required #pass=\"ngModel\">\n            <div [hidden]=\"pass.valid || pass.pristine\" class=\"mt-2 alert alert-danger\">\n            Password required!!\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"verifypass\" class=\"col-sm-2 col-form-label\">Verify Password<span class=\"mandatory\">*</span></label>\n\n        <div class=\"col-sm-10\">\n          <input type=\"password\" placeholder=\"123qwe#$\" id=\"verifypass\"\n                 [(ngModel)]=\"verifyPassword\" name=\"verifyPassword\" class=\"form-control\" [pattern]=\"password\" required #vPass=\"ngModel\">\n          <div [hidden] = \"vPass.valid || vPass.pristine\" class=\"mt-2 alert alert-danger\">\n            Password do not match!!\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <span class=\"col-sm-2\"></span>\n        <div class=\"col-sm-10 d-inline-block\">\n          <div class=\"py-1\">\n            <button type=\"button\" (click)=\"register(username, password, verifyPassword); form.reset();\"\n                    [disabled]=\"!form.form.valid\"\n                    class=\"btn btn-success form-control\" id=\"signup\">Sign Up\n            </button>\n          </div>\n          <!--<div class=\"py-1\">-->\n          <!--<a href=\"../login/login.template.client.html\">Login</a>-->\n          <!--</div>-->\n        </div>\n      </div>\n    </form>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/component/register/register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
        this.usernameExists = false;
    }
    RegisterComponent.prototype.register = function (username, password, verifyPassword) {
        var _this = this;
        this.service
            .register({ username: username, password: password })
            .then(function (res) {
            if (res.status === true) {
                _this.router.navigate(['profile']);
            }
            else {
                _this.usernameExists = true;
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/component/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/component/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/component/section-list/section-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/section-list/section-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/section-list/section-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/section-list/section-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark mb-3\">\n  <i class=\"btn fa fa-2x fa-times text-light mr-3\" routerLink=\"/home\"></i>\n  <a class=\"navbar-brand\" href=\"#\">{{course.title}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</nav>\n\n<div class=\"alert alert-info\" [hidden]=\"user!=null\">\n    Please login to access enrollment feature.\n</div>\n\n<div class=\"alert alert-info\" [hidden]=\"!(user!=null &&\n(user.username === 'admin' || user.username=== 'faculty'))\">\n  Only students allowed to enroll.\n</div>\n\n\n<div class=\"container-fluid\">\n  <div class=\"row navbar navbar-expand-lg bg-secondary text-light mb-2\">\n  <div class=\"col-4\">\n    <strong>Section Name</strong>\n  </div>\n  <div class=\"col-3\">\n    <strong>Maximum # of Seats</strong>\n  </div>\n  <div class=\"col-3\">\n    <strong>Available Seats</strong>\n  </div>\n  <div class=\"col-2\">\n  </div>\n</div>\n  <div class=\"row bg-light text-dark p-2 pl-2 mb-2\" *ngFor=\"let section of sections\">\n    <div class=\"col-4\">\n      {{section.name}}\n    </div>\n    <div class=\"col-3\">\n      {{section.maxSeats}}\n    </div>\n    <div class=\"col-3\">\n      {{section.availableSeats}}\n    </div>\n    <div class=\"col-2\">\n      <button [disabled]=\"user==null || enrollAllowed == false || user.username === 'admin' || user.username=== 'faculty'\"\n              [hidden]=\"!((!checkIfSectionAlreadyEnrolled(section)) && section.availableSeats !== 0)\"\n              (click)=\"enroll(section)\"\n              class=\"float-right btn btn-primary\">Enroll\n      </button>\n      <button [disabled]=\"user==null\" class=\"float-right btn btn-danger\" [hidden]=\"!checkIfSectionAlreadyEnrolled(section)\"\n              (click)=\"unenroll(section)\">Un-Enroll\n      </button>\n\n      <h6 class=\"float-right\" [hidden]=\"!(section.availableSeats == 0 && !checkIfSectionAlreadyEnrolled(section))\">\n        No Seats Left</h6>\n    </div>\n  </div>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/component/section-list/section-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/section-list/section-list.component.ts ***!
  \******************************************************************/
/*! exports provided: SectionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionListComponent", function() { return SectionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/section.service */ "./src/app/services/section.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SectionListComponent = /** @class */ (function () {
    function SectionListComponent(service, courseService, router, route, userService) {
        var _this = this;
        this.service = service;
        this.courseService = courseService;
        this.router = router;
        this.route = route;
        this.userService = userService;
        // sectionName = '';
        // seats = '';
        this.courseId = '';
        this.sections = [];
        this.studentSections = [];
        this.route.params.subscribe(function (params) { return _this.loadSections(params['courseId']); });
    }
    SectionListComponent.prototype.loadSections = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.course = { id: '1', title: 'dummy' };
        if (this.courseId != null && this.courseId !== '') {
            this.courseService
                .findCourseById(this.courseId)
                .then(function (course) { return _this.course = course; });
            this.service
                .findSectionsForCourse(courseId)
                .then(function (sections) { return _this.sections = sections; }).then(function () {
                _this.service.findSectionsForStudent()
                    .then(function (sections) { return _this.studentSections = sections; }).then(function () {
                    var ids = _this.sections.map(function (section) { return section._id; });
                    _this.enrollAllowed = !(_this.studentSections.filter(function (sect) {
                        return ids.includes(sect.section._id);
                    }).length > 0);
                });
            });
        }
    };
    SectionListComponent.prototype.enroll = function (section) {
        var _this = this;
        this.service
            .enrollStudentInSection(section._id)
            .then(function () {
            return _this.service.findSectionsForCourse(_this.courseId);
        })
            .then(function (sections) { return _this.sections = sections; }).then(function () {
            return _this.service.findSectionsForStudent().then(function (sections) {
                return _this.studentSections = sections;
            });
        }).then(function () {
            var ids = _this.sections.map(function (sec) { return sec._id; });
            _this.enrollAllowed = !(_this.studentSections.filter(function (sect) {
                return ids.includes(sect.section._id);
            }).length > 0);
        });
    };
    SectionListComponent.prototype.unenroll = function (section) {
        var _this = this;
        this.service
            .unenrollStudentInSection(section._id).then(function () {
            return _this.service.findSectionsForCourse(_this.courseId);
        })
            .then(function (sections) { return _this.sections = sections; }).then(function () {
            return _this.service.findSectionsForStudent().then(function (sections) {
                return _this.studentSections = sections;
            });
        }).then(function () {
            var ids = _this.sections.map(function (sec) { return sec._id; });
            _this.enrollAllowed = !(_this.studentSections.filter(function (sect) {
                return ids.includes(sect.section._id);
            }).length > 0);
        });
    };
    SectionListComponent.prototype.checkIfSectionAlreadyEnrolled = function (section) {
        return this.studentSections.filter(function (sect) { return sect.section._id === section._id; }).length > 0;
    };
    SectionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.findLoggedUser().then(function (user) { return _this.user = user; });
    };
    SectionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section-list',
            template: __webpack_require__(/*! ./section-list.component.html */ "./src/app/component/section-list/section-list.component.html"),
            styles: [__webpack_require__(/*! ./section-list.component.css */ "./src/app/component/section-list/section-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service__WEBPACK_IMPORTED_MODULE_2__["SectionService"], _services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], SectionListComponent);
    return SectionListComponent;
}());



/***/ }),

/***/ "./src/app/component/topic-pills/topic-pills.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/topic-pills/topic-pills.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.wbdv {\r\n  background-color: #545b62;\r\n  border-color: #545b62;\r\n  color:white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/topic-pills/topic-pills.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/topic-pills/topic-pills.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n<ul class=\"nav nav-pills mt-3\">\n  <li *ngFor=\"let topic of topics\"\n      class=\"nav-item \">\n    <a class=\"nav-link wbdv\"\n       [ngClass]=\"{'active': topic.id == topicId}\"\n       routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topic.id}}\">\n      {{topic.title}}\n    </a>\n  </li>\n</ul>\n  <app-widget-list></app-widget-list>\n</div>\n"

/***/ }),

/***/ "./src/app/component/topic-pills/topic-pills.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/topic-pills/topic-pills.component.ts ***!
  \****************************************************************/
/*! exports provided: TopicPillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPillsComponent", function() { return TopicPillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_topic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/topic.service */ "./src/app/services/topic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicPillsComponent = /** @class */ (function () {
    function TopicPillsComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.topics = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    TopicPillsComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.topicId = params['topicId'];
        this.loadTopics();
    };
    TopicPillsComponent.prototype.loadTopics = function () {
        var _this = this;
        if (this.courseId !== undefined && this.moduleId !== undefined && this.lessonId !== undefined) {
            this.service.findAllTopicsForLesson(this.courseId, this.moduleId, this.lessonId)
                .then(function (topics) { return _this.topics = topics; });
        }
    };
    TopicPillsComponent.prototype.ngOnInit = function () {
        this.topics = [];
    };
    TopicPillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-pills',
            template: __webpack_require__(/*! ./topic-pills.component.html */ "./src/app/component/topic-pills/topic-pills.component.html"),
            styles: [__webpack_require__(/*! ./topic-pills.component.css */ "./src/app/component/topic-pills/topic-pills.component.css")]
        }),
        __metadata("design:paramtypes", [_services_topic_service__WEBPACK_IMPORTED_MODULE_2__["TopicService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TopicPillsComponent);
    return TopicPillsComponent;
}());



/***/ }),

/***/ "./src/app/component/white-board/white-board.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/white-board/white-board.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Sticky footer styles\r\n-------------------------------------------------- */\r\n\r\n\r\n.footer {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  /* Set the fixed height of the footer here */\r\n  height: 60px;\r\n  line-height: 60px; /* Vertically center the text there */\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n\r\n/* Custom page CSS\r\n-------------------------------------------------- */\r\n\r\n\r\n/* Not required for template or sticky footer method. */\r\n\r\n\r\n/*body > .container {*/\r\n\r\n\r\n/*padding: 60px 15px 0;*/\r\n\r\n\r\n/*}*/\r\n\r\n\r\n.footer > .container {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n\r\ncode {\r\n  font-size: 80%;\r\n}\r\n\r\n\r\n.title{\r\n  font-family: \"Fira Code Retina\";\r\n}\r\n\r\n\r\n.nav-link{\r\n  font-family: \"Arial\";\r\n  font-size: large;\r\n\r\n}\r\n\r\n\r\n.mainContainer {\r\n  padding: 100px 15px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/component/white-board/white-board.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/white-board/white-board.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <!-- Fixed navbar -->\r\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\r\n\r\n    <a class=\"navbar-brand \" href=\"#\"><i class=\"fas fa-book-open fa-2x\"></i></a>\r\n    <a class=\"navbar-brand \" href=\"#\"><h1 class=\"title\">Course Manager</h1></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\r\n            aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"btn btn-dark\" [routerLinkActive]=\"['active']\" routerLink=\"/home\" >Home </a>\r\n          <!--<span class=\"sr-only\">(current)</span>-->\r\n        </li>\r\n        <li class=\"nav-item\">\r\n        <a [hidden]=\"(user === null)\" class=\"btn btn-dark ml-2\" [routerLinkActive]=\"['active']\" routerLink=\"/profile\" >Profile</a>\r\n      </li>\r\n        <li class=\"nav-item\">\r\n          <a [hidden]=\"!(user != null && user.username === 'admin')\" class=\"btn btn-dark ml-2\"\r\n             [routerLinkActive]=\"['active']\" routerLink=\"/admin\" >Admin</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a [hidden]=\"!(user != null && user.username === 'faculty')\" class=\"btn btn-dark ml-2\"\r\n             [routerLinkActive]=\"['active']\" routerLink=\"/faculty\" >Faculty Access</a>\r\n        </li>\r\n      </ul>\r\n      <form class=\"form-inline mt-2 mt-md-0\">\r\n        <!--<input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">-->\r\n        <button [hidden]=\"!(user === null)\" class=\"btn btn-dark my-2 my-sm-0 mr-2\" routerLink=\"/login\" [routerLinkActive]=\"['active']\"\r\n        type=\"button\">Login</button>\r\n\r\n        <h5 [hidden]=\"user===null\"class=\"text-light my-1 mr-1\"><i [hidden]=\"user===null\" class=\"fa fa-user text-light\"></i>\r\n          {{user!=null && user.username}}</h5>\r\n        <button [hidden]=\"user===null\" class=\"btn btn-dark my-2 my-sm-0 mr-2\" (click)=\"logout()\"\r\n                type=\"button\">Logout</button>\r\n        <button class=\"btn btn-dark my-2 my-sm-0 mr-2\" routerLink=\"/register\" [routerLinkActive]=\"['active']\"\r\n        type=\"button\">Sign Up</button>\r\n      </form>\r\n    </div>\r\n  </nav>\r\n</header>\r\n\r\n<div class=\"mainContainer\">\r\n  <router-outlet (activate)=\"sessionCheck()\" ></router-outlet>\r\n</div>\r\n<footer class=\"footer bg-dark\">\r\n  <div class=\"container text-center\">\r\n    <span class=\"text-muted\">@copyright Shubham Rastogi</span>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/component/white-board/white-board.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/white-board/white-board.component.ts ***!
  \****************************************************************/
/*! exports provided: WhiteBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardComponent", function() { return WhiteBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WhiteBoardComponent = /** @class */ (function () {
    function WhiteBoardComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    WhiteBoardComponent.prototype.ngOnInit = function () {
    };
    WhiteBoardComponent.prototype.sessionCheck = function () {
        var _this = this;
        this.userService.findLoggedUser().then(function (user) { return _this.user = user; });
    };
    WhiteBoardComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().then(function () { return _this.router.navigate(['*']); })
            .then(function () {
            return _this.userService.findLoggedUser().then(function (user) { return _this.user = user; });
        });
    };
    WhiteBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-white-board',
            template: __webpack_require__(/*! ./white-board.component.html */ "./src/app/component/white-board/white-board.component.html"),
            styles: [__webpack_require__(/*! ./white-board.component.css */ "./src/app/component/white-board/white-board.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WhiteBoardComponent);
    return WhiteBoardComponent;
}());



/***/ }),

/***/ "./src/app/component/widget-list/widget-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/widget-list/widget-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/widget-list/widget-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/widget-list/widget-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"border rounded mt-3\" [hidden]=\"!(widgets!=null  &&  widgets.length>0)\" >\r\n  <div *ngFor=\"let widget of widgets\" class=\"border-bottom p-3\">\r\n    <div [ngSwitch]=\"widget.widgetType\">\r\n      <div *ngSwitchCase=\"'Heading'\">\r\n        <div [ngSwitch]=\"widget.size\">\r\n          <!--<h1>Heading</h1>-->\r\n          <h1 *ngSwitchCase=\"'1'\">{{widget.text}}</h1>\r\n          <h2 *ngSwitchCase=\"'2'\">{{widget.text}}</h2>\r\n          <h3 *ngSwitchCase=\"'3'\">{{widget.text}}</h3>\r\n          <h4 *ngSwitchCase=\"'4'\">{{widget.text}}</h4>\r\n          <h5 *ngSwitchCase=\"'5'\">{{widget.text}}</h5>\r\n          <h6 *ngSwitchCase=\"'6'\">{{widget.text}}</h6>\r\n        </div>\r\n      </div>\r\n      <div *ngSwitchCase=\"'Link'\">\r\n        <!--<h1>Link</h1>-->\r\n        <a href=\"{{widget.href}}\">{{widget.text}}</a>\r\n      </div>\r\n      <div *ngSwitchCase=\"'Paragraph'\">\r\n        <!--<h1>Paragraph</h1>-->\r\n        <p>{{widget.text}}</p>\r\n      </div>\r\n      <div *ngSwitchCase=\"'List'\">\r\n        <!--<h1>ListWidget</h1>-->\r\n        <ul class=\"list-group\">\r\n          {{widget.text}}\r\n          <li class=\"list-group-item\"\r\n              *ngFor=\"let item of widget.listItems.split('\\n')\">\r\n            {{item}}\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div *ngSwitchCase=\"'Image'\">\r\n        <!--<h1>Image</h1>-->\r\n        <img src=\"{{widget.src}}\" width=\"40%\" height=\"40%\" title={{widget.text}}/>\r\n      </div>\r\n      <div *ngSwitchCase=\"'Exam'\">\r\n        <h1>Exam Widget</h1>\r\n      </div>\r\n      <div *ngSwitchCase=\"'Assignment'\">\r\n        <h1>Assignment</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/widget-list/widget-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/widget-list/widget-list.component.ts ***!
  \****************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_widget_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.widgets = [];
        this.route.params.subscribe(function (params) { return _this.setContext(params); });
    }
    WidgetListComponent.prototype.setContext = function (params) {
        this.context = params;
        this.loadWidgets(params.courseId, params.moduleId, params.lessonId, params.topicId);
    };
    WidgetListComponent.prototype.sortByWidgetOrder = function (array) {
        array.sort(function (p, q) {
            return p.orderOfWidget - q.orderOfWidget;
        });
        return array;
    };
    WidgetListComponent.prototype.loadWidgets = function (courseId, moduleId, lessonId, topicId) {
        var _this = this;
        this.widgets = [];
        if (courseId !== undefined && moduleId !== undefined && lessonId !== undefined && topicId !== undefined) {
            this.service.findAllWidgetsForTopics(courseId, moduleId, lessonId, topicId).then(function (widgets) {
                if (widgets.length > 0) {
                    _this.widgets = _this.sortByWidgetOrder(widgets);
                }
            });
        }
    };
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    WidgetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/component/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/component/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service__WEBPACK_IMPORTED_MODULE_1__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/app/models/section.model.client.ts":
/*!************************************************!*\
  !*** ./src/app/models/section.model.client.ts ***!
  \************************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
var Section = /** @class */ (function () {
    function Section() {
    }
    return Section;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/course-privacy.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/course-privacy.service.ts ***!
  \****************************************************/
/*! exports provided: CoursePrivacyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePrivacyService", function() { return CoursePrivacyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoursePrivacyService = /** @class */ (function () {
    function CoursePrivacyService() {
        this.HEROKU_BASE_URL = 'https://whiteboard-middle-tier-node.herokuapp.com/api/course/COURSEID/privacy';
        this.LOCAL_BASE_URL = 'http://localhost:5500/api/course/COURSEID/privacy';
        this.location = window.location.href;
        if (!location.toString().includes('localhost')) {
            this.URL = this.HEROKU_BASE_URL;
        }
        else {
            this.URL = this.LOCAL_BASE_URL;
        }
    }
    CoursePrivacyService.prototype.makeCoursePrivate = function (courseId) {
        return fetch(this.URL.replace('COURSEID', courseId), {
            method: 'post',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    CoursePrivacyService.prototype.makeCoursePublic = function (courseId) {
        return fetch(this.URL.replace('COURSEID', courseId), {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    CoursePrivacyService.prototype.getAllPrivateCourses = function () {
        return fetch(this.URL.replace('COURSEID/', ''), {
            credentials: 'include'
        })
            .then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return [];
            }
        });
    };
    CoursePrivacyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CoursePrivacyService);
    return CoursePrivacyService;
}());



/***/ }),

/***/ "./src/app/services/course.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/course.service.ts ***!
  \********************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourseService = /** @class */ (function () {
    function CourseService() {
        this.HEROKU_BASE_URL = 'https://webdev-rastogi-shubham.herokuapp.com/api/course';
        this.LOCAL_BASE_URL = 'http://localhost:8080/api/course';
        this.location = window.location.href;
        if (!location.toString().includes('localhost')) {
            this.COURSE_URL = this.HEROKU_BASE_URL;
        }
        else {
            this.COURSE_URL = this.LOCAL_BASE_URL;
        }
    }
    CourseService.prototype.findAllCourses = function () {
        return fetch(this.COURSE_URL)
            .then(function (response) { return response.json(); });
    };
    CourseService.prototype.findCourseById = function (courseId) {
        return fetch(this.COURSE_URL + '/' + courseId)
            .then(function (response) { return response.json(); });
    };
    CourseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./src/app/services/lesson.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/lesson.service.ts ***!
  \********************************************/
/*! exports provided: LessonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonService", function() { return LessonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LessonService = /** @class */ (function () {
    function LessonService() {
        this.HEROKU_BASE_URL = 'https://webdev-rastogi-shubham.herokuapp.com/api/course';
        this.LOCAL_BASE_URL = 'http://localhost:8080/api/course';
        this.location = window.location.href;
        if (!location.toString().includes('localhost')) {
            this.COURSE_URL = this.HEROKU_BASE_URL;
        }
        else {
            this.COURSE_URL = this.LOCAL_BASE_URL;
        }
    }
    LessonService.prototype.findAllLessonsForModule = function (courseId, moduleId) {
        return fetch(this.COURSE_URL + '/' + courseId + '/module/' + moduleId + '/lesson', {
            method: 'GET'
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    LessonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LessonService);
    return LessonService;
}());



/***/ }),

/***/ "./src/app/services/module.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/module.service.ts ***!
  \********************************************/
/*! exports provided: ModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleService", function() { return ModuleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuleService = /** @class */ (function () {
    function ModuleService() {
        this.HEROKU_BASE_URL = 'https://webdev-rastogi-shubham.herokuapp.com/api/course';
        this.LOCAL_BASE_URL = 'http://localhost:8080/api/course';
        this.location = window.location.href;
        if (!location.toString().includes('localhost')) {
            this.COURSE_URL = this.HEROKU_BASE_URL;
        }
        else {
            this.COURSE_URL = this.LOCAL_BASE_URL;
        }
    }
    ModuleService.prototype.findAllModulesForCourse = function (courseId) {
        return fetch(this.COURSE_URL + '/' + courseId + '/module', {
            method: 'GET'
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return [];
            }
        });
    };
    ModuleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ModuleService);
    return ModuleService;
}());



/***/ }),

/***/ "./src/app/services/section.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/section.service.ts ***!
  \*********************************************/
/*! exports provided: SectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionService", function() { return SectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionService = /** @class */ (function () {
    function SectionService() {
        this.location = window.location.href;
        if (!location.toString().includes('localhost')) {
            this.COURSE_SECTION_URL = 'https://whiteboard-middle-tier-node.herokuapp.com/api/course/COURSEID/section';
            this.SECTION_URL = 'https://whiteboard-middle-tier-node.herokuapp.com/api/section';
            this.STUDENT_SECTION = 'https://whiteboard-middle-tier-node.herokuapp.com/api/student/sections';
        }
        else {
            this.COURSE_SECTION_URL = 'http://localhost:5500/api/course/COURSEID/section';
            this.SECTION_URL = 'http://localhost:5500/api/section';
            this.STUDENT_SECTION = 'http://localhost:5500/api/student/sections';
        }
    }
    SectionService.prototype.findSectionsForStudent = function () {
        return fetch(this.STUDENT_SECTION, {
            credentials: 'include'
        })
            .then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return [];
            }
        });
    };
    SectionService.prototype.findAllSections = function () {
        return fetch(this.SECTION_URL, {
            credentials: 'include'
        })
            .then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return [];
            }
        });
    };
    SectionService.prototype.enrollStudentInSection = function (sectionId) {
        var url = this.SECTION_URL + '/' + sectionId + '/enroll';
        return fetch(url, {
            method: 'post',
            credentials: 'include'
        });
    };
    SectionService.prototype.unenrollStudentInSection = function (sectionId) {
        var url = this.SECTION_URL + '/' + sectionId + '/unenroll';
        return fetch(url, {
            method: 'delete',
            credentials: 'include'
        });
    };
    SectionService.prototype.findSectionsForCourse = function (courseId) {
        return fetch(this.COURSE_SECTION_URL.replace('COURSEID', courseId))
            .then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return [];
            }
        });
    };
    SectionService.prototype.createSection = function (courseId, name, seats) {
        var section = { courseId: courseId, name: name, availableSeats: seats, maxSeats: seats };
        return fetch(this.COURSE_SECTION_URL.replace('COURSEID', courseId), {
            method: 'post',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SectionService.prototype.deleteSection = function (sectionId) {
        return fetch(this.SECTION_URL + '/' + sectionId, {
            method: 'DELETE',
        });
    };
    SectionService.prototype.updateSection = function (sectionId, section) {
        console.log(section);
        return fetch(this.SECTION_URL + '/' + sectionId, {
            method: 'PUT',
            body: JSON.stringify(section),
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SectionService);
    return SectionService;
}());



/***/ }),

/***/ "./src/app/services/topic.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/topic.service.ts ***!
  \*******************************************/
/*! exports provided: TopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicService", function() { return TopicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopicService = /** @class */ (function () {
    function TopicService() {
        this.HEROKU_BASE_URL = 'https://webdev-rastogi-shubham.herokuapp.com/api/course';
        this.LOCAL_BASE_URL = 'http://localhost:8080/api/course';
        this.location = window.location.href;
        if (!location.toString().includes('localhost')) {
            this.COURSE_URL = this.HEROKU_BASE_URL;
        }
        else {
            this.COURSE_URL = this.LOCAL_BASE_URL;
        }
    }
    TopicService.prototype.findAllTopicsForLesson = function (courseId, moduleId, lessonId) {
        return fetch(this.COURSE_URL + '/' + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic', {
            method: 'GET'
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return [];
            }
        });
    };
    TopicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TopicService);
    return TopicService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
        var base;
        if (!location.toString().includes('localhost')) {
            base = 'https://whiteboard-middle-tier-node.herokuapp.com';
        }
        else {
            base = 'http://localhost:5500';
        }
        this.url = base + '/api/user';
        this.urlRegister = base + '/api/register';
        this.urlLoggedUser = base + '/api/profile';
        this.urlUpdateProfile = base + '/api/profile';
        this.urlLogin = base + '/api/login';
        this.urlPassReset = base + '/api/reset';
        this.urlVerifyUsername = base + '/api/verify';
        this.urlLogout = base + '/api/logout';
        this.urlDeleteProfile = base + '/api/delete';
    }
    UserService.prototype.register = function (user) {
        return fetch(this.urlRegister, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    UserService.prototype.login = function (username, password) {
        return fetch(this.urlLogin, {
            method: 'POST',
            body: JSON.stringify({ username: username, password: password }),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    UserService.prototype.logout = function () {
        return fetch(this.urlLogout, {
            method: 'POST',
            credentials: 'include',
        });
    };
    UserService.prototype.findLoggedUser = function () {
        return fetch(this.urlLoggedUser, {
            credentials: 'include',
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    UserService.prototype.updateUserProfile = function (user) {
        return fetch(this.urlUpdateProfile, {
            method: 'PUT',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/widget.service.ts ***!
  \********************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetService = /** @class */ (function () {
    function WidgetService() {
        this.HEROKU_BASE_URL = 'https://webdev-rastogi-shubham.herokuapp.com/api/course';
        this.LOCAL_BASE_URL = 'http://localhost:8080/api/course';
        this.location = window.location.href;
        if (!location.toString().includes('localhost')) {
            this.COURSE_URL = this.HEROKU_BASE_URL;
        }
        else {
            this.COURSE_URL = this.LOCAL_BASE_URL;
        }
    }
    WidgetService.prototype.findAllWidgetsForTopics = function (courseId, moduleId, lessonId, topicId) {
        return fetch(this.COURSE_URL + '/' + courseId + '/module/' +
            moduleId + '/lesson/' + lessonId + '/topic/' + topicId + '/widget', {
            method: 'GET'
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return [];
            }
        });
    };
    WidgetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shubh\Dropbox\WebDevSummer2018\whiteboard-client-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map