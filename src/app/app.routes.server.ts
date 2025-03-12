import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Server, // הוספת נתיב לשורש
  },
  {
    path: 'login',
    renderMode: RenderMode.Server // הוספת נתיב ל-login
  },
  {
    path: 'register',
    renderMode: RenderMode.Server // הוספת נתיב ל-register
  },
  {
    path: 'navbar',
    renderMode: RenderMode.Server // הוספת נתיב ל-navbar
  },
  {
    path: 'navbar/:id',
    renderMode: RenderMode.Server // נתיב עבור ShowCourseComponent
  },
  {
    path: 'navbar/AddLesson/:id',
    renderMode: RenderMode.Server // נתיב עבור AddLessonComponent
  },
];
