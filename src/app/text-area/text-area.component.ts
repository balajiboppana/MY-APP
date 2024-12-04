import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {
  textValue: string = '';

  // Property to store the current character count
  charCount: number = 0;

  // Method to update character count dynamically
  updateCharCount(): void {
    this.charCount = this.textValue.length;
  }
}