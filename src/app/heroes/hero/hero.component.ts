import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',//Ejecutando este selector en el modulo.ts principal, si esta importado se crearan los elementos que se definene
  templateUrl: './hero.component.html',//-continuacion arriba->  dentro de esta url.
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string{
    return 'Hola, Mundo'.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    if(this.name == 'ironman'){
      this.name = 'spiderman';
    }else{
      this.name = 'ironman';
    }
    ;
  }

  changeEdad(num:number):void {
    this.age= num;
  }

  resetDatos(){
    this.age=45;
    this.name = 'ironman';
  }
}
