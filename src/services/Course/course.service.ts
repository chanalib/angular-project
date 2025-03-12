import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/api/courses';
  
  constructor(private http: HttpClient) { }

  private getToken(): string | null {
    // בדוק אם הקוד רץ בדפדפן
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('token');
    }
    return null;
  }

  getCourses(): Observable<any> {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
    return this.http.get<any>(this.apiUrl, httpOptions);
  }

  addCourse(title: String, description: String): Observable<any> {
    const token = this.getToken();
    const userId = typeof window !== 'undefined' ? sessionStorage.getItem('UserId') : null;
    const body = { title, description, userId };

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }

    return this.http.post<any>(this.apiUrl, body, httpOptions);
  }

  updateCourse(id: string, updates: any): Observable<any> {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
    return this.http.put(`${this.apiUrl}/${id}`, updates, httpOptions);
  }

  deleteCourse(id: string): Observable<any> {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
    return this.http.delete(`${this.apiUrl}/${id}`, httpOptions);
  }

  getCourseById(id: string): Observable<Course> {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
    return this.http.get<Course>(`${this.apiUrl}/${id}`, httpOptions);
  }

  enrollStudentInCourse(courseId: string, userId: string): Observable<any> {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
    return this.http.post(`${this.apiUrl}/${courseId}/enroll`, { userId }, httpOptions);
  }

  unenrollStudentFromCourse(courseId: string, userId: string): Observable<any> {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    
    return this.http.delete(`${this.apiUrl}/${courseId}/unenroll`, {
      body: { userId },
      ...httpOptions
    });
  }

  getCoursesByStudentId(studentId: string): Observable<any> {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
    return this.http.get<any>(`${this.apiUrl}/student/${studentId}`, httpOptions);
  }
}
