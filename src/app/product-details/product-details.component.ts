import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { tap } from 'rxjs';
import { productDetails } from '../product/productDetails';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  products: productDetails = new productDetails();

  constructor(private route: ActivatedRoute, private service: ProductServiceService) {
  }
  ngOnInit(): void {

    this.route.params.subscribe(data => {
      console.log(data)
      const id = data['id'];

      this.service.getProductById(id).subscribe((response) => {
        console.log(response);
        this.products = response

      })
    })

  }
}
