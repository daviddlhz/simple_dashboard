import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTableComponent } from './data-table.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserProvider } from '@core/providers/user.provider';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataTableComponent],
      providers: [UserProvider],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load data on ngOnChanges', () => {
    // Arrange
    component.userData = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
          geo: {
            lat: '-43.9509',
            lng: '-34.4618',
          },
        },
        phone: '123-456-7890',
      },
    ];
    component.rowsPerPage = 5;

    // Act
    component.ngOnChanges();

    // Assert
    expect(component.isDataLoaded).toBeTrue();
    expect(component.paginatedData.length).toBe(1);
    expect(component.totalPagesArray.length).toBe(1);
    expect(component.hasDataFilter).toBeTrue();
  });

  it('should filter data on search', () => {
    // Arrange
    component.userData = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        address: {
          street: 'Douglas Extension',
          suite: 'Suite 847',
          city: 'McKenziehaven',
          zipcode: '59590-4157',
          geo: {
            lat: '-68.6102',
            lng: '-47.0653',
          },
        },
        phone: '123-456-7890',
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        address: {
          street: 'Kattie Turnpike',
          suite: 'Suite 198',
          city: 'Lebsackbury',
          zipcode: '31428-2261',
          geo: {
            lat: '-38.2386',
            lng: '57.2232',
          },
        },
        phone: '987-654-3210',
      },
    ];
    component.rowsPerPage = 5;
    component.searchText = 'John';

    // Act
    component.onSearch();

    // Assert
    expect(component.paginatedData.length).toBe(1);
    expect(component.paginatedData[0].name).toBe('John Doe');
    expect(component.totalPagesArray.length).toBe(1);
    expect(component.hasDataFilter).toBeTrue();
  });

  it('should change page and update data', () => {
    // Arrange
    component.userData = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        address: {
          street: 'Kattie Turnpike',
          suite: 'Suite 198',
          city: 'Lebsackbury',
          zipcode: '31428-2261',
          geo: {
            lat: '-38.2386',
            lng: '57.2232',
          },
        },
        phone: '123-456-7890',
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
          geo: {
            lat: '-43.9509',
            lng: '-34.4618',
          },
        },
        phone: '987-654-3210',
      },
    ];
    component.rowsPerPage = 1;
    component.ngOnChanges();

    // Act
    component.changePage(2);

    // Assert
    expect(component.paginatedData.length).toBe(1);
    expect(component.paginatedData[0].name).toBe('Jane Smith');
    expect(component.totalPagesArray.length).toBe(2);
    expect(component.currentPage).toBe(2);
  });
});
