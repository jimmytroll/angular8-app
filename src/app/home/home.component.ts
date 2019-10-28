import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

import { App, User } from '@/_models';
import { AppService, AuthenticationService } from '@/_services';

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
        private router: Router,
        private appService: AppService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllApps();
    }

    private loadAllApps() {
        this.appService.getAllApps()
            .subscribe(
                data => {
                    this.apps = data;
                },
                error => {
                    console.log(error);
                });
    }

    createApp() {
        this.appService.createApp("appName", "appDesc")
            .subscribe(
                data => {
                    this.apps = data;
                    // this.router.navigate(['/']);
                },
                error => {
                    console.log(error);
                });
    }
}