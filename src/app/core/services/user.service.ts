import {Injectable} from '@angular/core';
import {IUserService} from "@domain/interfaces/user.interface";
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {UserEntity} from "@domain/entities/user.entity";
import {environment} from "@environment/environment";

@Injectable()
export class UserService implements IUserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<HttpResponse<UserEntity[]>> {
    return this.http.get<UserEntity[]>(`${environment.API}/users`, { observe: 'response' });
  }
}
