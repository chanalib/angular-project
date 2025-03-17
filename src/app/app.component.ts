import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from '../components/courses/courses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CoursesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
}