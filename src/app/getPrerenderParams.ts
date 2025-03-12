import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrerenderParamsResolver implements Resolve<{ id: string }> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ id: string }> {
    const id = route.paramMap.get('id');
    if (id === null) {
      throw new Error('ID parameter is missing');
    }
    return of({ id }); // מחזיר את הפרמטרים הנדרשים
  }
}
