import { Component, OnInit } from '@angular/core';
import { ProductAllService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  submitted = false;

  constructor(private productAllService: ProductAllService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
  

  }

  newTutorial(): void {
   
  }

}
