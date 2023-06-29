import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calificacion-alum',
  templateUrl: './calificacion-alum.component.html',
  styleUrls: ['./calificacion-alum.component.css']
})
export class CalificacionAlumComponent {
  @Input() califica! : number;
  @Output() calificaClick : EventEmitter<string> = new EventEmitter();
  starWidth! : number;

  ngOnChange():void{
    this.starWidth = this.califica*76/10;
  }

  onClick(){
    this.calificaClick.emit(`${this.califica}`);
  }
}
