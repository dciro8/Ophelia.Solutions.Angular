import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDto } from 'src/app/models/Product.model';
import { ProductAllService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-ProdcutAll-list',
  templateUrl: './ProdcutAll-list.component.html',
  styleUrls: ['./ProdcutAll-list.component.css']
})
export class GetAllProductListComponent implements OnInit {
  ProductDto?: ProductDto[];
  currentPage = 1;
  filteredObjectList!: ProductDto[];
  objectList!: ProductDto[];
  _filterValue!: string;
  items : any=[];
  pageOfItems?:ProductDto[];

  constructor(private productAllService: ProductAllService,
    private  router: Router,
    private readonly route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getProductAll();
  }

   get filterValue(): string {
   return this._filterValue;
  }
  
  set filterValue(value: string) {
    this._filterValue = value;

if (value ==''){
this.ProductDto=this.objectList ;
}
else{
    this.filteredObjectList = this.filterValue
      ? this.perfomFilter()
      : this.objectList;
  }
}

  perfomFilter(): ProductDto[] {
    const filterBy = this.filterValue.toLocaleLowerCase();
    var value = this.objectList.filter(
      (cPersona: ProductDto) =>
        cPersona.name?.toString().toLocaleLowerCase().indexOf(filterBy) !== -1
    );
this.ProductDto=value;
    return value ;
  }


  getProductAll(): void {
    this.productAllService.getAll()
      .subscribe(
        data => {
          this.ProductDto = data;
            this.objectList =  this.ProductDto;
          this.filteredObjectList = this.objectList;
          this.items =this.ProductDto.fill(this.ProductDto[2]).map((_x, i) => ({ id:this.objectList[i], name: `${i + 0}`}));
          console.log(this.items );
        },
        error => {
          console.log(error);
        });
  }

  
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
  
  update(ObjectValue: ProductDto) {
    this.router.navigate(['/SetProduct/' + ObjectValue.id]);
  console.log('ObjectValue',ObjectValue);
  }


  delete(ObjectDelete: ProductDto) {
    // this.router.navigate(['/SetDeleteId/' + ObjectDelete.id]);
if (ObjectDelete.id != undefined){
  this.deleteProductId(ObjectDelete.id);  
  this.getProductAll();

}
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
    }
  
  
}
