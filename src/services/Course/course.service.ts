import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/Course';
import { log } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/api/courses';
  private token = sessionStorage.getItem('token');
  constructor(private http: HttpClient) { }

  getCourses(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.http.get<any>(this.apiUrl, httpOptions);
  };
  addCourse(title: String, description: String,): Observable<any> {
    const userId = sessionStorage.getItem('UserId');
    const body = { title, description, userId };

const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    }


    return this.http.post<any>(this.apiUrl, body, httpOptions);
  }
  updateCourse(id: string, updates: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.http.put(`${this.apiUrl}/${id}`, updates, httpOptions);
  }

  deleteCourse(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.http.delete(`${this.apiUrl}/${id}`, httpOptions);
  }
  getCourseById(id: string): Observable<Course> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.http.get<Course>(`${this.apiUrl}/${id}`,httpOptions);
  }
  enrollStudentInCourse(courseId: string, userId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.http.post(`${this.apiUrl}/${courseId}/enroll`, { userId }, httpOptions);
  }

  unenrollStudentFromCourse(courseId: string, userId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    };
    
    return this.http.delete(`${this.apiUrl}/${courseId}/unenroll`, {
      body: { userId },
      ...httpOptions // הוספת httpOptions כאן
    });
}


  getCoursesByStudentId(studentId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.http.get<any>(`${this.apiUrl}/student/${studentId}`, httpOptions);
  }
}




