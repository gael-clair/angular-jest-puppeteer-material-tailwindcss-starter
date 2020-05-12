import { Component, Input } from '@angular/core';

/**
 * Home component.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input()
  message: string;
}
