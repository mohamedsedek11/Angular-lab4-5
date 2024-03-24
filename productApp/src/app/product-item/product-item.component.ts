import { Component ,Input, Output} from '@angular/core';
import { Product } from '../model/product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductsService } from '../services/cart.service';
import { EventEmitter } from 'stream';
import { CounterService } from '../services/counter.service';



@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
@Input() product! : Product ;

cart : any[] = []; 
item : any;
count : number = 0;



constructor(private router: Router, private productService: ProductsService , private counterService: CounterService){}

ngOnInit(){
  this.counterService.getCounter().subscribe((value) => this.count = value);
  console.log(this.count)
 }

routetosingle(id : any){
  // this.router.navigate(['/app-singleproduct' ,id]);
  this.router.navigate([`/app-singleproduct/${id}`]);
}

addToCart(product: Product) {
  this.productService.addToCart(product);
  window.alert('Your product has been added to the cart!');
  this.count = this.count + 1;
  this.counterService.setCounter(this.count);
}

}
