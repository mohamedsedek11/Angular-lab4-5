import { Component } from '@angular/core';
import { ProductsService } from '../services/cart.service';
import { Product } from '../model/product';
import productJson from '../../assets/products-list.json'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items!: Array<Product> ;
  item : any
  ngOnInit(){
    console.log("Hallo cart")
    this.productService.getarraycart().subscribe((value) => this.item = value);
  }

  constructor(private productService: ProductsService){

  }
  products! : Array<any> ;




  



}
