import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDto } from 'src/app/models/Product.model';
import { ProductAllService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-ProdcutAll-list',
  templateUrl: './ProdcutAll-list.component.html',
  styleUrls: ['./ProdcutAll-list.component.css']
})
export class GetAllProductListComponent implements OnInit {
  ProductDto?: ProductDto[];

  constructor(private productAllService: ProductAllService,
    private readonly router: Router,
    ) { }

  ngOnInit(): void {
    this.getProductAll();
  }

  getProductAll(): void {
    this.productAllService.getAll()
      .subscribe(
        data => {
          this.ProductDto = data;
          console.log('this.ProductDto',this.ProductDto);
        },
        error => {
          console.log(error);
        });
  }

  
  update(ObjectValue: ProductDto) {
    this.router.navigate(['/SetProduct/' + ObjectValue.id]);
  console.log('ObjectValue',ObjectValue);
  }

  delete(ObjectDelete: ProductDto) {
    this.router.navigate(['/DeleteProduct/' +ObjectDelete.id]);
    console.log('ObjectDelete',ObjectDelete);
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
}
