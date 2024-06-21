import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SpinningWheelComponent } from './spinning-wheel/spinning-wheel.component';
import { InputCheckComponent } from './input-check/input-check.component';

import { FormsModule } from '@angular/forms';

import { TalkativeDirective } from './talkative.directive';

import { PlaceholderPipe } from './placeholder.pipe';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,TalkativeDirective, PlaceholderPipe,SpinningWheelComponent, InputCheckComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})




  export class AppComponent {
  title = 'adventure-app';
}
