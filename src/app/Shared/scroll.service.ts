import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject = new Subject<string>();

  scrollComponent$ = this.scrollSubject.asObservable();

  scrollToComponent(componentId: string) {
    this.scrollSubject.next(componentId);
  }
  constructor() { }
}
