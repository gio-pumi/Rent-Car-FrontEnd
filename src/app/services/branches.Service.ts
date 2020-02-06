import { Branch } from '../models/branch';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  constructor(private httpClient: HttpClient) { }

  public getBranch(): Observable<Branch[]> {
    const url = "http://localhost:58161/api/branches";
    return this.httpClient.get<Branch[]>(url);
  }
}
