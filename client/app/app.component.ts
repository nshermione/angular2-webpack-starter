import {Component} from '@angular/core';
import {Logger, LogLevel} from "./services/logger.service";

@Component({
    selector: 'app',
    template: `
    <header></header>
    
    <div class="page-wrap">
    
    </div>
    
    <footer></footer>
    `
})
export class AppComponent {
    constructor(
        private logger:Logger
    )
    {
        this.logger.setLogLevel(LogLevel.DEBUG);
    }
}