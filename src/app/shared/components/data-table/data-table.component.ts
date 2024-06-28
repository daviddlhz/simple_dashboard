import {Component, Input, OnChanges} from '@angular/core';
import {UserData} from "@domain/entities/user.entity";
import {faSpinner, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'data-table-component',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements OnChanges {

  @Input() userData!: UserData[];

  iconFaSpinner = faSpinner;
  rowsPerPage: number = 5;
  currentPage: number = 1;
  searchText: string = '';
  paginatedData: UserData[] = [];
  totalPagesArray: number[] = [];
  isDataLoaded: boolean = false;

  ngOnChanges(): void {
    if (this.userData && this.userData.length > 0) {
      this.updatePagination();
      this.isDataLoaded = true;
    }
  }

  onSearch(): void {
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination(): void {
    const filteredData = this.userData.filter((data: UserData) =>
      data.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / this.rowsPerPage);
    this.totalPagesArray = Array.from({ length: totalPages }, (v, k) => k + 1);
    this.paginatedData = filteredData.slice(
      (this.currentPage - 1) * this.rowsPerPage,
      this.currentPage * this.rowsPerPage
    );
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.updatePagination();
  }

  protected readonly iconFaUser = faUser;
}
