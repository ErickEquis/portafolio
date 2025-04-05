import { Component } from '@angular/core';

@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [],
  template: `
    <p class="fs-3">¡Gracias!</p>
    <i class="bi bi-heart" style="color: rgb(113, 44, 249); font-size: 1.5rem; font-weight: bold;"></i>
  `,
  host: {
    'class': 'd-flex justify-content-center align-items-center flex-column',
    '[style.height]': '"25vh"',
  },
  styleUrl: './thanks.component.css'
})
export class ThanksComponent {

}
