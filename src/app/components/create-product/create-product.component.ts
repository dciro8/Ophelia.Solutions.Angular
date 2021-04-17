import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/models/Product.model';
import { ResponseMessage } from 'src/app/models/ResponseMessage.model';
import { ProductAllService } from 'src/app/services/Product.service';
;
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productDto: ProductDto = {};
  
  response: ResponseMessage={};
  ProductDto?: ProductDto[];

  submitted = false;
  constructor(private productAllService: ProductAllService) { }

  ngOnInit(): void {
  }


  getRegister(): void {

    this.getProductAll();

    this.setCreteProduct();
  }

  setCreteProduct(): void {
    this.productAllService.setProduct(this.productDto)
      .subscribe(
        data => {
          this.response= data;
console.log(this.response);

console.log(this.response.result);


          if (this.response != undefined && this.response.result !=undefined && this.response.result>0 ) {
            this.submitted=true;
          }
          else {
         
            this.submitted=false;
         }
        },
        error => {
          console.log(error);
        });
  }

  
  getProductAll(): void {
    this.productAllService.getAll()
      .subscribe(
        data => {
          this.ProductDto = data;
        },
        error => {
          console.log(error);
        });
  }



}
