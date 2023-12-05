import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  constructor(private service: ProductServiceService) {

  }

  title = 'learnAngular';



}
