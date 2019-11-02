import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './homeDetail.component.html'
})
export class HomeDetailComponent implements OnInit {
    appName;

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        console.log(this.route.snapshot.params.id);
        this.appName = this.route.snapshot.params.id;
    }
}