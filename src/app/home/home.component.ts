import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];
    apps = [];

    columnDefs = [
        { headerName: 'Name', field: 'name', sortable: true, filter: true },
        { headerName: 'Description', field: 'desc', sortable: true, filter: true }
    ];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        // this.loadAllUsers();
        this.loadAllApps();
    }

    // deleteUser(id: number) {
    //     this.userService.delete(id)
    //         .pipe(first())
    //         .subscribe(() => this.loadAllUsers());
    // }

    // private loadAllUsers() {
    //     this.userService.getAll()
    //         .pipe(first())
    //         .subscribe(users => this.users = users);
    // }

    private loadAllApps() {
        this.apps = [
            { "name": "test1", "desc": "test1" },
            { "name": "test2", "desc": "test2" },
            { "name": "test3", "desc": "test3" },
            { "name": "test4", "desc": "test4" },
            { "name": "test5", "desc": "test5" }
        ];
    }
}