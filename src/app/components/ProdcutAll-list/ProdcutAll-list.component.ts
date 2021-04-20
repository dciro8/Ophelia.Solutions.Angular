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
    this.router.navigate(['/SetProduct/' + ObjectDelete.id]);
  }
}
