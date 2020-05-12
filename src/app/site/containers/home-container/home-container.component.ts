import { Component } from '@angular/core';
import { LoggerService } from '@app/core/services';

/**
 * Home page container.
 */
@Component({
  selector: 'app-site-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent {
  message = 'Hello World !!!';

  /**
   * Returns an instance of HomeContainerComponent.
   * @param logger logger service
   */
  constructor(private readonly log: LoggerService) {}
}
