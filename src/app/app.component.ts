import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sections = [
    { title: 'Service offerings' },
    { title: 'Explore industries' },
    { title: 'Our platforms' },
    { title: 'Navigate your next' }
  ];
}
