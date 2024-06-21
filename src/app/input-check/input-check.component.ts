import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlaceholderPipe } from '../placeholder.pipe';

@Component({
  selector: 'app-input-check',
  standalone: true,
  imports: [FormsModule, CommonModule, PlaceholderPipe],
  templateUrl: './input-check.component.html',
  styleUrls: ['./input-check.component.css']
})

export class InputCheckComponent {
  userInput: string = '';
}
