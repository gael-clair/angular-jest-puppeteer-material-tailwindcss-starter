import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core';
import { SiteModule } from '@app/site';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Application module activating:
 * - AppRoutingModule
 * - CoreModule
 */
@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, SiteModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
