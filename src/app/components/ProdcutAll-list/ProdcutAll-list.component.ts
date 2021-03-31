import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-ProdcutAll-list',
  templateUrl: './ProdcutAll-list.component.html',
  styleUrls: ['./ProdcutAll-list.component.css']
})
export class GetAllProductListComponent implements OnInit {
  ProductDto?: ProductDto[];

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
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
