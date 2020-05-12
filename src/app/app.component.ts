import { Component } from '@angular/core';
import { LoggerService } from '@app/core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-jest-puppeteer-material-tailwindcss-starter';

  constructor(private readonly log: LoggerService) {
    this.log.debug('Application opened');
  }
}
