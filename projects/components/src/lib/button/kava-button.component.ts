import { NgClass, NgStyle } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ButtonColors } from './types/button.colors';
import { ButtonSizes } from './types/button.sizes';
import { ButtonTypes } from './types/button.types';

@Component({
  selector: 'kava-button',
  templateUrl: './kava-button.component.html',
  styleUrls: ['./kava-button.component.scss'],
  imports: [
    NgStyle,
    NgClass
  ],
  standalone: true
})
export class KavaButtonComponent {
  @Input() label!: string;
  @Input() color: ButtonColors = ButtonColors.primary;
  @Input() type: ButtonTypes = ButtonTypes.flat;
  @Input() size: ButtonSizes = ButtonSizes.normal;
  @Input() disabled: boolean = false;

  classes(): Record<string, boolean> {
    return {
      [this.size]: true,
      [this.color]: true,
      [this.type]: true,
    }
  }
}
