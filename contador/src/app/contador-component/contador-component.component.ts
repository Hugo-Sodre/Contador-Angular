import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contador-component',
  templateUrl: './contador-component.component.html',
  styleUrls: ['./contador-component.component.css']
})
export class ContadorComponentComponent {

  valor:number = 0;
  
  incrementa(){
    this.valor++
  }
  decrementa(){
    this.valor--
  }
}
