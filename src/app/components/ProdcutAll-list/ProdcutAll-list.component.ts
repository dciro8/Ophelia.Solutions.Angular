import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/models/tutorial.model';
import { ProductAllService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-ProdcutAll-list',
  templateUrl: './ProdcutAll-list.component.html',
  styleUrls: ['./ProdcutAll-list.component.css']
})
export class GetAllProductListComponent implements OnInit {
  ProductDto?: ProductDto[];

  constructor(private productAllService: ProductAllService ) { }

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

}
