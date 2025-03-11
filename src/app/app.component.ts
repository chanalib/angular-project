import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { CoursesComponent } from '../components/courses/courses.component';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';
import { AddTeacherComponent } from '../components/add-teacher/add-teacher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,CoursesComponent,ErrorDialogComponent, AddTeacherComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
}