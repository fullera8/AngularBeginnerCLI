import { Component } from '@angular/core';
import { LoggerService } from 'my-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rounting';

  constructor(private loggerService: LoggerService) {
    loggerService.log('hello world!');
  }
}
