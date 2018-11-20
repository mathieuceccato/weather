import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';


@Injectable()
export class HttpWrapper {
    constructor(private http: HttpClient) {

    }

    public get(url: string): Observable<any> {
        return this.http.get(url + '&units=metric&APPID=' + environment.apiKey);
    }
}
