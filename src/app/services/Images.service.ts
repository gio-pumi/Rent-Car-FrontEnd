import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';

@Injectable({
    providedIn: 'root'
})
export class ImagesService {

    public constructor(private httpClient: HttpClient) { }
    private url = "http://localhost:58161/api/Images";

    public uploadImage(fileToUpload: File): Observable<string> {
        const formData: FormData = new FormData();
        formData.append('image', fileToUpload);
        return this.httpClient.post<string>(this.url, formData);
    }
}
