import {Component, OnInit} from '@angular/core';
import {DashboardService} from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private page = {pageNumber : 0, size : 20, totalElements: 0};
  private rows = [];

  constructor(private DashboardService: DashboardService) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }

  ngOnInit() {
    this.setPage({offset: 0});
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset * this.page.size;
    this.DashboardService.getLinks(this.page.size, this.page.pageNumber).subscribe(res => {
      if (res.status === 'Success') {
        this.page.totalElements = res.data.page.count;
        this.rows = res.data.rows;
      }
    });
  }

}
