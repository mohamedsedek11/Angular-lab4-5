import { Component ,Input} from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../model/product';
import { CommonModule } from '@angular/common';
import productJson from '../../assets/products-list.json'
@Component({
  selector: 'app-productslist',
  standalone: true,
  imports: [ProductItemComponent,CommonModule],
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.css'
})
export class ProductslistComponent {
  // @Input() products!: Product [];
  products : Array<Product> = productJson ;
}
