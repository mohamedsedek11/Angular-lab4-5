import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import prodJson from '../../assets/products-list.json'

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter = new BehaviorSubject<number>(0)
  constructor() { }

  getCounter(){
    return this.counter.asObservable();
  }

  setCounter(newvalue : number){
    this.counter.next(newvalue);
  }
}
