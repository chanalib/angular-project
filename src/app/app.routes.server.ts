import { RenderMode, ServerRoute } from '@angular/ssr';
export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Server,
  },
  {
    path: 'login',
    renderMode: RenderMode.Server,
  },
  {
    path: 'register',
    renderMode: RenderMode.Server,
  },
  {
    path: 'navbar',
    renderMode: RenderMode.Server,
  },
  {
    path: 'navbar/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'navbar/courses/:id', // הוספת נתיב ל-courses
    renderMode: RenderMode.Server,
  },
  {
    path: 'navbar/AddLesson/:id',
    renderMode: RenderMode.Server,
  },
];
