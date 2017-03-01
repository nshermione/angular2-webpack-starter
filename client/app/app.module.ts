import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";
import {UserService} from "./services/user.service";
import {Logger} from "./services/logger.service";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        Header,
        Footer
    ],
    providers: [
        UserService,
        Logger
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}