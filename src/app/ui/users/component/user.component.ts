import {Component, Inject, OnInit} from '@angular/core';
import {UserRepository} from "@domain/enums/user.enum";
import {IUserService} from "@domain/interfaces/user.interface";
import {UserEntity} from "@domain/entities/user.entity";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'users-component',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  usersData!: UserEntity[];

  constructor(@Inject(UserRepository.IUserService) private userService: IUserService) {}

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData(): void {
    this.userService.getUsers().subscribe({
      next: (response: HttpResponse<UserEntity[]>) => {
        this.usersData = response.body || [];
      },
      error: (error: HttpErrorResponse) => console.log("error fetch data")
    })
  }
}
