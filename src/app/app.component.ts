import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//Aqui exporta la clase a app.component.html y por ello desde ese script se puede acceder a las variables definidas dentro de la clase
  styleUrl: './app.component.css'
})
export class AppComponent {//TRBAJAMOS DENTRO DE ESTA CLASE SIEMPRE.
  public title:string = 'Hola Mundo';
}
