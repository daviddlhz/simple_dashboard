import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {UserEntity} from "@domain/entities/user.entity";

export interface IUserService {
  getUsers(): Observable<HttpResponse<UserEntity[]>>
}
