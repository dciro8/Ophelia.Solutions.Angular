import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/models/Product.model';
import { ProductYearDto, SalesForYear } from 'src/app/models/ProductForYear';
import { ProductAllService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-GetSaleYear',
  templateUrl: './GetSaleYear.component.html',
  styleUrls: ['./GetSaleYear.component.css']
})
export class GetSaleYearComponent implements OnInit {

  submitted = false;
  productYear: ProductYearDto = {};
  salesForYear?:SalesForYear[];
  ProductDto?: ProductDto[];
  constructor(private productAllService: ProductAllService) { }

  ngOnInit(): void {
  }

  getRegister(): void {
    console.log('year', this.productYear);

    this.getProductForYear();
  }

  newTutorial(): void {
  }
  
  getProductForYear(): void {
    this.productAllService.getProductForYear(this.productYear)
      .subscribe(
        data => {
          if (data.length>0){
            this.submitted=true;
          }
          else
          {
            this.submitted=false;}
          this.salesForYear = data;
        },
        error => {
          console.log(error);
        });
  }

}
 