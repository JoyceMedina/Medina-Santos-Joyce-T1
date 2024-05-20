import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="container-fluid p-3">
      <div class="w-100 h-100 bg-orange-custom px-4 py-3 rounded-3 shadow-sm text-center">
        <span class="font-modeska fw-bold fs-6 text-light">
          <i class="bi bi-person-standing-dress"></i>
          Medina Santos Joyce
        </span>
      </div>
    </footer>
    `
})
export class FooterComponent { }
