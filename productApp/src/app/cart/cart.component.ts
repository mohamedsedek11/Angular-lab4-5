import { Component } from '@angular/core';
import { ProductsService } from '../services/cart.service';
import { Product } from '../model/product';
import productJson from '../../assets/products-list.json'
import { CommonModule } from '@angular/common';
import { IfStmt } from '@angular/compiler';
import { CounterService } from '../services/counter.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  count : number = 1
  pricce : boolean = false
  countt : number = 0 ;

  items = this.productService.getItems();

  constructor(private productService: ProductsService ,private counterService: CounterService){
    

  }
  ngOnInit(){
    this.counterService.getCounter().subscribe((value) => this.countt = value);
    console.log(this.countt)
   }
  

 
  minus(val : any ){
    if(val == 1){

    }else{
    this.count = this.count - 1;
    val = this.count
    }
  }

  setcount(val :any ){
    this.count = this.count + 1;
    val = this.count
   
  }


  remove(index : number){
    this.items.splice(index, 1);

    this.count = this.items.length;
    this.counterService.setCounter(this.count);

  }
  



}
