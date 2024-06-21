import { Component } from '@angular/core';

@Component({
  selector: 'app-spinning-wheel',
  standalone: true,
  imports:[],
  templateUrl: './spinning-wheel.component.html',
  styleUrls: ['./spinning-wheel.component.css']
})
export class SpinningWheelComponent {
  outcomes: string[] = ['Prize 1', 'Prize 2', 'Try Again', 'Bonus!'];
  result: string = '';

  spin() {
    const randomIndex = Math.floor(Math.random() * this.outcomes.length);
    this.result = this.outcomes[randomIndex];

    if (this.result === 'Try Again') {
      // an extra spin after a second
      setTimeout(() => this.spin(), 1000); 
    }
  }
}
