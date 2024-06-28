import { Component } from '@angular/core';

interface UserData {
  nombre: string;
  edad: number;
  email: string;
}

@Component({
  selector: 'data-table-component',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {
  data: UserData[] = [
    { nombre: 'Juan Pérez', edad: 28, email: 'juan@example.com' },
    { nombre: 'María García', edad: 34, email: 'maria@example.com' },
    { nombre: 'Carlos Rodríguez', edad: 25, email: 'carlos@example.com' },
    { nombre: 'Juan Pérez', edad: 28, email: 'juan@example.com' },
    { nombre: 'María García', edad: 34, email: 'maria@example.com' },
    { nombre: 'Carlos Rodríguez', edad: 25, email: 'carlos@example.com' },
    { nombre: 'Juan Pérez', edad: 28, email: 'juan@example.com' },
    { nombre: 'María García', edad: 34, email: 'maria@example.com' },
    { nombre: 'Carlos Rodríguez', edad: 25, email: 'carlos@example.com' },
    { nombre: 'Juan Pérez', edad: 28, email: 'juan@example.com' },
    { nombre: 'María García', edad: 34, email: 'maria@example.com' },
    { nombre: 'Carlos Rodríguez', edad: 25, email: 'carlos@example.com' },
    // Agrega más datos según sea necesario
  ];
  rowsPerPage = 5;
  currentPage = 1;
  searchText = '';
  paginatedData: UserData[] = [];
  totalPagesArray: number[] = [];

  ngOnInit() {
    this.updatePagination();
  }

  onSearch() {
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    const filteredData = this.data.filter(item =>
      item.nombre.toLowerCase().includes(this.searchText.toLowerCase())
    );
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / this.rowsPerPage);
    this.totalPagesArray = Array.from({ length: totalPages }, (v, k) => k + 1);
    this.paginatedData = filteredData.slice(
      (this.currentPage - 1) * this.rowsPerPage,
      this.currentPage * this.rowsPerPage
    );
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }
}
