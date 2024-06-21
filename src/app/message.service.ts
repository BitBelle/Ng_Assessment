import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})


export class MessageService {
  private messages: string[] = [
    'Suprise! Suprise',
    'Wow! It works!',
    'Hurray! Weekend!',
    'Haha Funny',
    'I love my cats',
    'Bye the end!'
  ];

  constructor() { 
    
  }

  getRandomMessage(): string {
    const randomIndex = Math.floor(Math.random() * this.messages.length);
    return this.messages[randomIndex];
  }
}
