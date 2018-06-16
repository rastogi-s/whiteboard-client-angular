import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {RegisterComponent} from './component/register/register.component';
import {WhiteBoardComponent} from './component/white-board/white-board.component';
import {LoginComponent} from './component/login/login.component';
import {ProfileComponent} from './component/profile/profile.component';
import {AdminComponent} from './component/admin/admin.component';
import {CourseGridComponent} from './component/course-grid/course-grid.component';
import {CourseService} from './services/course.service';
import {ModuleService} from './services/module.service';
import {UserService} from './services/user.service';
import {TopicService} from './services/topic.service';
import {LessonService} from './services/lesson.service';
import {WidgetService} from './services/widget.service';
import { CourseViewerComponent } from './component/course-viewer/course-viewer.component';
import { ModuleListComponent } from './component/module-list/module-list.component';
import { LessonTabsComponent } from './component/lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './component/topic-pills/topic-pills.component';
import { WidgetListComponent } from './component/widget-list/widget-list.component';
import { SectionListComponent } from './component/section-list/section-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    WhiteBoardComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    SectionListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    CourseService,
    ModuleService,
    UserService,
    TopicService,
    LessonService,
    WidgetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
