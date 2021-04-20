import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ApplicationConstants } from '../../app.constants';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number | undefined;
  @Input() totalItems: number | undefined;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  itemsPerPage: number | undefined;

  constructor(private readonly location: Location) {}

  ngOnInit(): void {
    this.addPageToUrl();
    const constants = ApplicationConstants.CONSTANTS;
    this.itemsPerPage = constants.paginationSize;
  }

  addPageToUrl() {
    const path = this.location.path();
    if (path.includes('page')) {
      return;
    }
    this.location.replaceState(`${path}?page=${this.currentPage}`);
  }

  onPageChange(page: number) {
    const path = this.location.path();
    if (path.includes('page')) {
      const url = path.split('?')[0];
      this.location.replaceState(`${url}?page=${page}`);
    }
    this.pageChange.emit(page);
  }
}
