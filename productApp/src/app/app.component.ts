import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import productJson from '../assets/products-list.json'
import { Product } from './model/product';
import { CommonModule } from '@angular/common';
import { ProductslistComponent } from './productslist/productslist.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ProductslistComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'productApp';

  products : Array<Product> = productJson ;
}
