import { Routes } from '@angular/router';
import { of } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ShowCourseComponent } from '../components/show-course/show-course.component';
import { AddLessonComponent } from '../components/add-lesson/add-lesson.component';
import { HeaderComponent } from '../components/header/header.component';
import { CoursesComponent } from '../components/courses/courses.component';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { AddTeacherComponent } from '../components/add-teacher/add-teacher.component';
import { teacherGuard } from '../guard/teacher.guard';
import { LoginComponent } from '../components/login/login.component';
import { SighUpComponent } from '../components/sigh-up/sigh-up.component';

// פונקציה להחזרת פרמטרים עבור prerendering
export function getPrerenderParams(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    return of({ id }); // מחזיר את הפרמטרים הנדרשים
}

export const routes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: SighUpComponent },
    {
        path: 'navbar', component: NavbarComponent,
        children: [
            { path: 'courses', component: CoursesComponent },
            { path: 'home', component: HomePageComponent },
            { path: 'addCourse', component: AddTeacherComponent, canActivate: [teacherGuard] },
            {
                path: ':id', component: ShowCourseComponent,
                resolve: { params: getPrerenderParams }, // הוסף את הפונקציה כאן
                data: { renderMode: 'prerender' } // השאר את renderMode
            },
            {
                path: 'AddLesson/:id', component: AddLessonComponent,
                resolve: { params: getPrerenderParams }, // הוסף את הפונקציה כאן
                data: { renderMode: 'prerender' } // השאר את renderMode
            }
        ]
    }
];
