import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './cell-custom.component.html'
})
export class CellCustomComponent implements OnInit {
    params: any;

    constructor(private router: Router) { }

    agInit(params) {
        this.params = params;
    }

    ngOnInit() { }

    viewApp() {
        let rowData = this.params;
        console.log(rowData.data);
        this.router.navigate(['/detail/'+rowData.data.name]);
    }
}