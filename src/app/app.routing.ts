import {RouterModule, Routes} from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { CourseGridComponent } from './component/course-grid/course-grid.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AdminComponent } from './component/admin/admin.component';
import {CourseViewerComponent} from './component/course-viewer/course-viewer.component';
import {SectionListComponent} from './component/section-list/section-list.component';
import {FacultyAccessComponent} from './component/faculty-access/faculty-access.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: CourseGridComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'faculty', component: FacultyAccessComponent},
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'course/:courseId/section', component: SectionListComponent },
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent },
  { path: '**', component: CourseGridComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
