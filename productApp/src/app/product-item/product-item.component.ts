import { Component ,Input, Output} from '@angular/core';
import { Product } from '../model/product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductsService } from '../services/cart.service';
import { EventEmitter } from 'stream';


@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
@Input() product! : Product ;

cart! : Array<any>; 
item : any;

ngOnInit(){
  this.productService.getarraycart().subscribe((value) => this.item = value);
 }

constructor(private router: Router, private productService: ProductsService){}


routetosingle(id : any){
  // this.router.navigate(['/app-singleproduct' ,id]);
  this.router.navigate([`/app-singleproduct/${id}`]);
}

arryofitems: Array<Object> =[] ;

addtocart(obj : any){
  this.productService.setarraycart(obj)
  console.log(this.item)
}

}
