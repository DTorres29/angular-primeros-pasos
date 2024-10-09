import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor'];
  public deletedHero?:string = '';//LE PONEMOS '?' PARA DECIRLE QUE PUEDE NO TENER NADA LA PRIOPIEDAD
  //SIEMPRE QUE QUIERA MOSTRAR UN ELEMENTO DESDE EL HTML DEBO TRATARLO DESDE AQUI COMO PROPIEDAD.

   removeLastHero():void{
     this.deletedHero= this.heroNames.pop();
     console.log(this.deletedHero);
  }
}
