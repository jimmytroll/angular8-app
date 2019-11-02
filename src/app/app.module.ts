import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { HomeDetailComponent } from './homeDetail';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { CellCustomComponent } from './_custom';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        AgGridModule.withComponents([])
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HomeDetailComponent,
        LoginComponent,
        RegisterComponent,
        CellCustomComponent,
        AlertComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    entryComponents: [CellCustomComponent],
    bootstrap: [AppComponent]
})
export class AppModule { };