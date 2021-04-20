import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/models/Product.model';
import { ResponseMessage } from 'src/app/models/ResponseMessage.model';
import { ProductAllService } from 'src/app/services/Product.service';

import { Util } from 'src/app/common/util';


import { ActivatedRoute, Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { Observable } from 'rxjs/internal/Observable';


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
  isEnable =true;
  constructor(private productAllService: ProductAllService,
    private translate: TranslateService,
    private readonly route: ActivatedRoute) {
    translate.setDefaultLang('es');


    // this.route.params.subscribe(param =>{


    //   if( param['id'] != undefined){
    //   this.getProductId(param['id'])
    //   this.isEnable=true;
    //   }else{
    //     this.isEnable=false;
    // }
    //  });
  }

  ngOnInit(): void {
    this.route.params.subscribe(param =>{



    console.log('idDelete', param);

    if( param['idDelete'] != undefined)
    {
      this.deleteProductId(param['idDelete']);
      
    }
    else{
    if( param['id'] != undefined)
    {
      this.getProductId(param['id']);
      
      console.log('this.productDto12345', this.productDto);
          this.isEnable=true;
    }else{
           this.isEnable=false;

            this.productDto.code='dciro1';
       }
      }
     });
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
      if (this.response != undefined && this.response.result !=undefined && this.response.result>0 ) {
            this.submitted=true;
             Util.printMessage(0);
          }
          else {
            Util.printMessage(1);
            this.submitted=false;
         }
        },
        error => {
          console.log(error);
        });
  }


 getProductId(idProduct:string){
 
  this.productAllService.getProductForId(idProduct)
      .subscribe(
        (data: any) => {
          console.log('antes');
          console.log('data',data);
          this.productDto = data.pop();
        },
        error => {
          console.log(error);
        });

        return  this.productDto;
  }


  deleteProductId(idProduct:string){
 
    this.productAllService.DeleteProductForId(idProduct)
        .subscribe(
          data => {
            console.log('data',data);
          },
          error => {
            console.log(error);
          });
  
          return  this.productDto;
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
