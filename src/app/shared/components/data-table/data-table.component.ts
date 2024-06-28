import { Component, Input, OnChanges } from '@angular/core';
import { UserData } from "@domain/entities/user.entity";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'data-table-component',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnChanges {
  @Input() userData!: UserData[];
  @Input() rowsPerPage!: number;

  readonly iconFaSpinner = faSpinner;
  currentPage: number = 1;
  searchText: string = '';
  paginatedData: UserData[] = [];
  totalPagesArray: number[] = [];
  isDataLoaded: boolean = false;
  hasDataFilter: boolean = false;
  headerDataTable: string[] = ['Name', 'Email', 'Street', 'Phone'];

  /**
   * Lifecycle hook that is called when any data-bound property of a directive changes.
   * Initiates data loading process.
   */
  ngOnChanges(): void {
    this.loadData();
  }

  /**
   * Handles search operations. Resets pagination and filters data based on the search text.
   */
  onSearch(): void {
    this.resetPagination();
    this.filterAndPaginateData();
  }

  /**
   * Changes the current page and updates the data displayed based on the new page.
   * @param page The new page number to navigate to.
   */
  changePage(page: number): void {
    this.currentPage = page;
    this.filterAndPaginateData();
  }

  /**
   * Loads data if user data is available. Sets the data loaded flag to true.
   * Private method to encapsulate the data loading logic.
   */
  private loadData(): void {
    if (this.hasUserData()) {
      this.filterAndPaginateData();
      this.isDataLoaded = true;
    }
  }

  /**
   * Checks if user data is present.
   * @returns A boolean indicating if user data is available.
   */
  private hasUserData(): boolean {
    return this.userData && this.userData.length > 0;
  }

  /**
   * Resets the pagination to the first page.
   */
  private resetPagination(): void {
    this.currentPage = 1;
  }

  /**
   * Filters and paginates data based on the current search text and page.
   * Private method to encapsulate the logic for filtering and pagination.
   */
  private filterAndPaginateData(): void {
    const filteredData = this.filterDataByName(this.userData, this.searchText);
    this.totalPagesArray = this.calculateTotalPages(filteredData.length, this.rowsPerPage);
    this.paginatedData = this.paginateData(filteredData, this.currentPage, this.rowsPerPage);
    this.hasDataFilter = this.hasFilteredData();
  }

  /**
   * Checks if filtered data is present.
   * @returns A boolean indicating if filtered data is available.
   */
  private hasFilteredData(): boolean { 
    return this.paginatedData.length > 0;
  }

  /**
   * Filters data by name based on the provided search text.
   * @param data The array of UserData to filter.
   * @param searchText The text to filter the data by.
   * @returns An array of UserData filtered by the search text.
   */
  private filterDataByName(data: UserData[], searchText: string): UserData[] {
    return data.filter((item: UserData) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  /**
   * Calculates the total number of pages based on the total items and rows per page.
   * @param totalItems The total number of items.
   * @param rowsPerPage The number of items per page.
   * @returns An array representing the total pages.
   */
  private calculateTotalPages(totalItems: number, rowsPerPage: number): number[] {
    const totalPages = Math.ceil(totalItems / rowsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  /**
   * Paginates data based on the current page and rows per page.
   * @param data The array of UserData to paginate.
   * @param currentPage The current page number.
   * @param rowsPerPage The number of items per page.
   * @returns An array of UserData for the current page.
   */
  private paginateData(data: UserData[], currentPage: number, rowsPerPage: number): UserData[] {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return data.slice(startIndex, startIndex + rowsPerPage);
  }
}