import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { App } from '@/_models';

@Injectable({ providedIn: 'root' })
export class AppService {
    constructor(private http: HttpClient) { }

    getAllApps() {
        return this.http.get<any>(`http://localhost:3000/allApps`);
    }

    createApp(appName, appDesc) {
        return this.http.post<any>(`http://localhost:3000/createApp`, { appName, appDesc });
    }

}