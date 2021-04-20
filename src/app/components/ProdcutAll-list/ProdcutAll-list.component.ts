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
  // totalItems: number;
  // _filterValue: string;


  constructor(private productAllService: ProductAllService,
    private  router: Router,
    private readonly route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    const page = this.route.snapshot.queryParams.page || 1;
    if (page) {
      this.currentPage = Number(page);
    }
    // this.GetAllItems(this.currentPage);
    this.getProductAll();
  }

   get filterValue(): string {
   return this._filterValue;
  }

  
  set filterValue(value: string) {
    this._filterValue = value;

    console.log('this.objectList ',this.objectList );

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


  // set filterValue(value: string) {
  //   this._filterValue = value;
  //   this.filteredObjectList = this.filterValue
  //     ? this.perfomFilter()
  //     : this.objectList;
  // }

  // perfomFilter(): ProductDto[] {
  //   const filterBy = this.filterValue.toLocaleLowerCase();
  //   return this.objectList.filter(
  //     (cPersona: ProductDto) =>
  //       cPersona.Id.toString().toLocaleLowerCase().indexOf(filterBy) !== -1
  //   );
  // }

  
  onNext(page: number): void {
    // this.filterValue = '';
    this.currentPage = page;
    //this.GetAllItems(page);
  }


  // GetAllItems(page: number): void {
  //   this.spinner.show();
  //   this.personaService.getByParams('', page).subscribe(
  //     (operationResult) => {
  //       this.objectList = operationResult.ResultData;
  //       this.filteredObjectList = this.objectList;
  //       this.spinner.hide();
  //       this.totalItems = operationResult.RowsAffected;
  //     },
  //     (error: HttpErrorResponse) => {
  //       this.errorService.checkError(error);
  //     }
  //   );
  // }

  getProductAll(): void {
    this.productAllService.getAll()
      .subscribe(
        data => {
          this.ProductDto = data;
            this.objectList =  this.ProductDto;
          this.filteredObjectList = this.objectList;
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
    // this.router.navigate(['/SetDeleteId/' + ObjectDelete.id]);
if (ObjectDelete.id != undefined){
  this.deleteProductId(ObjectDelete.id);  
  this.getProductAll();

}

  //this.deleteProductId(ObjectDelete.id );  
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
