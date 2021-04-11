import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/models/Product.model';
import { ResponseMessage } from 'src/app/models/ResponseMessage.model';
import { ProductAllService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productDto: ProductDto = {};
  
  response: ResponseMessage={};

  submitted = false;
  constructor(private productAllService: ProductAllService) { }

  ngOnInit(): void {
  }


  getRegister(): void {

    this.getProductForYear();
  }

  getProductForYear(): void {
    this.productAllService.setProduct(this.productDto)
      .subscribe(

        data => {

          this.response= data;

          if (this.response != undefined && this.response.result !=undefined && this.response.result<0 ) {
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



}
