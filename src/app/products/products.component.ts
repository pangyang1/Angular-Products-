import { Component, OnInit } from '@angular/core';
import { Product } from '../product/';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product[] = [
    {
    id: 1,
    name: 'Dslr camera',
    price: '$449.99',
    },
    {
    id: 2,
    name: 'MacBook Pro',
    price: '$649.99',
    },
    {
    id: 3,
    name: 'Asus laptop',
    price: '$899.99',
    }
    ]

    selectedProduct: Product

  constructor() { }

  onSelectProduct(product) {
      this.selectedProduct = product;
  }

  ngOnInit() {

  }

}
