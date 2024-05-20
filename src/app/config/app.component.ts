import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../shared/nav/nav.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    FooterComponent
  ],
  template: `
  <div class="w-100 vh-100 d-flex flex-column justify-content-between bg-light">
    <app-nav />
    <router-outlet />
    <app-footer />
  </div>
  `
})
export class AppComponent { }
