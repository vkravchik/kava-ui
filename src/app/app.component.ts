import { Component } from '@angular/core';
import { ThemeService } from 'kava-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kava-ui';

  constructor(private themeService: ThemeService) {
  }


  public switchTheme(): void {
    console.log(this.themeService.getActiveTheme());

    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
      return;
    }

    this.themeService.setDarkTheme();
  }
}
