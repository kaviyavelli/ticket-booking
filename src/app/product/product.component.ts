import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { productDetails } from './productDetails';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  prodList!: productDetails[];



  constructor(private service: ProductServiceService) {

  }

  ngOnInit(): void {
    this.service.getProductList().subscribe(data => {
      console.log(data);
      this.prodList = data;
    })
  }

}
