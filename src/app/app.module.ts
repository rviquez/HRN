import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './start/app.component';

import { NavComponent } from './shared/nav/navbar.component';
import { FooterComponent } from './shared/footer/footer.component'
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './shared/app.routing';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        HomeComponent,
        ErrorComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
