import { Component, OnInit } from '@angular/core';
import { ProductAllService} from 'src/app/services/Product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {
 
  message = '';

  constructor(
    private productAllService: ProductAllService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
  }
age = '';

}
