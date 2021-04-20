import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuHidden = true;

  constructor(private readonly router: Router) {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  logout() {
    this.router.navigate(['/logout']);
  }
  ngOnInit(): void {
  }

}
