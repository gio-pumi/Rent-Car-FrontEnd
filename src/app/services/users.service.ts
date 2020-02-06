import { HttpClient } from "@angular/common/http";
import { User } from './../models/user';
import { Credentials } from '../models/credentials';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public constructor(private httpClient: HttpClient) { }

  public addUser(user: User): Observable<string> {
    const url = "http://localhost:58161/api/users";
    return this.httpClient.post<string>(url, user);
  }

  public logIn(creditionals: Credentials): Observable<User> {
    const url = "http://localhost:58161/api/users/login";
    return this.httpClient.post<User>(url, creditionals);
  }
}
