
import { Injectable } from '@angular/core';

import { Product } from '../model/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // products : Array<Product> = prodJson;
  // products : Array<any> = [
  //   {
  //     "id": 1,
  //     "title": "iPhone 9",
  //     "description": "An apple mobile which is nothing like apple",
  //     "price": 549,
  //     "discountPercentage": 12.96,
  //     "rating": 4.69,
  //     "stock": 94,
  //     "brand": "Apple",
  //     "category": "smartphones",
  //     "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  //     "singleImage" :"https://cdn.dummyjson.com/product-images/1/4.jpg",
  //     "secondImage" :"https://cdn.dummyjson.com/product-images/1/3.jpg",
  //     "thirdImage" : "https://cdn.dummyjson.com/product-images/3/1.jpg",
  //     "images": [
  //       "https://cdn.dummyjson.com/product-images/1/1.jpg",
  //       "https://cdn.dummyjson.com/product-images/1/2.jpg",
  //       "https://cdn.dummyjson.com/product-images/1/3.jpg",
  //       "https://cdn.dummyjson.com/product-images/1/4.jpg",
  //       "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
  //     ]
  //   }
  // ];
  // cartitems: any[] = []
  // private arrayofproducts = new BehaviorSubject<any[]>([])

  // private arrayofcart = new BehaviorSubject<any[]>([])

 

 

  items: Product[] =[];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }


}
