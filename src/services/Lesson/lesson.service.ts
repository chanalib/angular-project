import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class LessonService {


  constructor(private http: HttpClient) { }
  private apiUrl = "http://localhost:3000/api/courses"
  private token = sessionStorage.getItem('token');


  // Get all lessons by course ID
  getLessonsByCourseId(courseId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.http.get<any>(`${this.apiUrl}/${courseId}/lessons`, httpOptions);
  }

  // Get lesson by ID
  getLessonById(courseId: string, lessonId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    }
    return this.http.get<any>(`${this.apiUrl}/${courseId}/lessons/${lessonId}`, httpOptions);
  }

  // Create new lesson (Teacher only)
  createLesson(courseId: string, title: string, content: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    };

    const body = { title, content }; // הגוף של הבקשה כולל את הכותרת והתוכן

    return this.http.post<any>(`${this.apiUrl}/${courseId}/lessons`, body, httpOptions);
  }

  // Update lesson by ID (Teacher only)
  updateLesson(courseId: string, lessonId: string, updates: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    };
    return this.http.put<any>(`${this.apiUrl}/${courseId}/lessons/${lessonId}`, updates, httpOptions);
  }

  // Delete lesson by ID (Teacher only)
  deleteLesson(courseId: string, lessonId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    };

    return this.http.delete<any>(`${this.apiUrl}/${courseId}/lessons/${lessonId}`, httpOptions);
  }
}


