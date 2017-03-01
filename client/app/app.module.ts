import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        Header,
        Footer
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}