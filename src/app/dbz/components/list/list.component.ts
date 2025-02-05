import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[]= [{
    name:'Trunks',
    power:10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(ident?:string):void{
    if(!ident) return; //VERIFICA QUE EXISTE ID
    this.onDelete.emit(ident);
  }

  // verLista(index:number):void{
  //   console.log(this.characterList, index);
  //   this.characterList.splice(index,1);
  // }
}
