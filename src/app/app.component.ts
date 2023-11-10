import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel-app';
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
