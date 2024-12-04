import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public counstSub:BehaviorSubject<number>=new BehaviorSubject(0);
  constructor() { }
}
