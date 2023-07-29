import { Component, Input } from '@angular/core';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'kava-button',
  templateUrl: './kava-button.component.html',
  styleUrls: ['./kava-button.component.scss'],
  standalone: true
})
export class KavaButtonComponent {
  @Input() label!: string;
  @Input() disabled: boolean = false;
  constructor(public themeService: ThemeService) {
  }
}
