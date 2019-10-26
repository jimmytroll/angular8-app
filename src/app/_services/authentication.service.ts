import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        console.log("this.currentUserSubject : "+this.currentUserSubject.value)
        return this.currentUserSubject.value;
    }

    login(username, password) {

        const user1 = [{
            "firstName": "Admin",
            "lastName": "User",
            "token": "2awd2qq3dq2534ewfdedd23",
            "id": 1,
            "username": "admin",
            "password": "admin123"
        }];
        localStorage.setItem('currentUser', JSON.stringify(user1));
        this.currentUserSubject.next(user1[0]);
        return user1;
        /*
        return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
        */
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}