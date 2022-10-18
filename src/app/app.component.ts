import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // INTERPOLACIÓN
  nombre = 'Teddy'

  // PROPERTY BINDING
  textoPlaceholder = 'Escribir aquí'
  deshabilitado = true;
  imgSrc = 'https://angular.io/assets/images/logos/angular/angular.png'

  constructor() {
    setInterval(() => this.nombre = 'Pool', 3000); //INTERPOLACION
    setInterval(() => this.deshabilitado = false, 3000); //PROPERTY BINDING
  }

  // FUNCION PARA INTERPOLACION
  getSuma(numero1: number, numero2: number) {
    return numero1 + numero2
  }

  // EVENT BINDING
  texto = 'Esto es un video sobre event binding'
  cambiarTexto(): void {
    this.texto = "En el proximo video vamos a ver Two Way Data-Binding"
  }
  texto2 = ''
}
