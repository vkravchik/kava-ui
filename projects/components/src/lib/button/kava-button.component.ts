import { Component, Input } from '@angular/core';

export enum ButtonTypes {
  primary = 'primary',
  secondary = 'secondary',
}

@Component({
  selector: 'kava-button',
  templateUrl: './kava-button.component.html',
  styleUrls: ['./kava-button.component.scss'],
  standalone: true
})
export class KavaButtonComponent {
  @Input() label!: string;
  @Input() type: ButtonTypes = ButtonTypes.primary;
  @Input() disabled: boolean = false;
}
