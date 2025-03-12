import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { SighUpComponent } from '../components/sigh-up/sigh-up.component';
import { CoursesComponent } from '../components/courses/courses.component';
import { AddTeacherComponent } from '../components/add-teacher/add-teacher.component';
import { teacherGuard } from '../guard/teacher.guard';
import { ShowCourseComponent } from '../components/show-course/show-course.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { AddLessonComponent } from '../components/add-lesson/add-lesson.component';
import { HeaderComponent } from '../components/header/header.component';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { PrerenderParamsResolver } from './getPrerenderParams';

export const routes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: SighUpComponent },
    {
        path: 'navbar', component: NavbarComponent,
        children: [
            { path: 'courses', component: CoursesComponent },
            { path: 'courses/:id', component: ShowCourseComponent, resolve: { params: PrerenderParamsResolver }, data: { renderMode: 'default' } },
            { path: 'home', component: HomePageComponent },
            { path: 'addCourse', component: AddTeacherComponent, canActivate: [teacherGuard], data: { renderMode: 'default' }},
            { path: 'AddLesson/:id', component: AddLessonComponent, resolve: { params: PrerenderParamsResolver }, data: { renderMode: 'default' }}
        ]
    }
];
