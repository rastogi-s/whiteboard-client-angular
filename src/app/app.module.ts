import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { WhiteBoardComponent } from './component/white-board/white-board.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AdminComponent } from './component/admin/admin.component';
import { CourseGridComponent } from './component/course-grid/course-grid.component';
import {CourseService} from './services/course.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    WhiteBoardComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent,
    CourseGridComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
