import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Product } from '../models/product';
import { ProductItemComponentComponent } from '../product-item-component/product-item-component.component';
//import { ProductItemComponentComponent } from '../product-item-component/product-item-component.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @ViewChildren(ProductItemComponentComponent )
  productItems!: QueryList<ProductItemComponentComponent>;

  products!: Product[]; 

  constructor() { 
    this.products = [];
  
  }

  ngOnInit(): void {

  }

  selectedProduct(productComponent:ProductItemComponentComponent){

    alert(`Product ${productComponent.product.name} selected`);
    this.productItems.forEach(p=>{
      p.isSelected = false;
    });
    productComponent.isSelected = true;

  }

  /*selectedProduct(product: Product) {
    alert(`Product ${product.name} selected`);
    }*/
}
