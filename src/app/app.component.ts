import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Teddy'
  textoPlaceholder = 'Escribir aquí'
  deshabilitado = true;
  imgSrc = 'https://angular.io/assets/images/logos/angular/angular.png'
  constructor() {
    setInterval(() => this.nombre = 'Pool', 3000);
    setInterval(() => this.deshabilitado = false, 3000);
  }
  getSuma(numero1: number, numero2: number) {
    return numero1 + numero2
  }
}
