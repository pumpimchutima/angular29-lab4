import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item-component',
  templateUrl: './product-item-component.component.html',
  styleUrls: ['./product-item-component.component.css']
})
export class ProductItemComponentComponent implements OnInit {

  @Input()
  product: Product = new Product;

  @Output()
  OnSelected:EventEmitter<ProductItemComponentComponent> = new EventEmitter();

  isSelected:boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  select(){
    this.OnSelected.emit(this);
  }

}
