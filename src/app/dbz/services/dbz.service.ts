import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({//SE AÑADE INYECTABLE A UNA CLASE PARA USARLA DESDE OTRA
  //DENTTRO DE "main-page-components" AÑADIMOS LA CLASE Y CON ELLO PODREMOS
  //UTILIZAR TODOS LOS METODOS DE ESTA CLASE CON SUS RESPECTIVOS ATRIBUTOS.
  providedIn: 'root'//CON ESTA LINEA NUESTRO SERVICION HACE UN SINGLETON.
})
export class DbzService {
  public characters: Character[]= [{
    id: uuid(),
    name:'Krillin',
    power:1000
  },{
    id: uuid(),
    name:'Goku',
    power:9500
  },{
    id: uuid(),
    name:'vegeta',
    power:7500
  }];

  addCharacter(character: Character):void{
    console.log('Main Page!!!!',character);

    const obj:Character = {id: uuid(),...character};

    this.aniadirPersonaje(obj);
  }

  aniadirPersonaje(character:Character):void{
    this.characters.push(character);
  }

  deleteById(id:string):void{
     this.characters= this.characters.filter(char => char.id !== id);
    // console.log(this.characters);
  }


}
