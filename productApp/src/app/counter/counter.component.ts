import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
count = 0 ;
  constructor(private counterService: CounterService){}
   ngOnInit(){
    this.counterService.getCounter().subscribe((value) => this.count = value);
    console.log(this.count)
   }
  setcount(count : number){
    this.count = count + 1;
    this.counterService.setCounter(this.count);
  }
  minus(count : number){
    if(this.count == 0){

    }else{
    this.count = this.count - 1;
    this.counterService.setCounter(this.count);
  }
}
}
