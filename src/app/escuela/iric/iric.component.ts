import { Component } from '@angular/core';
import { IAlumnos } from '../alumnosIr';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';
  alumnos:IAlumnos[]=[
    {
      "matricula":1234,
      "nombre":"Mario",
      "edad":23,
      'correo':'mario@gmail.com',
      'pago':129.25,
      'foto':'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmario.nintendo.com%2Fes%2F&psig=AOvVaw0Z3mrAJ6ahTopLhaRxH9Gq&ust=1686797280295000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDuw9bfwf8CFQAAAAAdAAAAABAH'
    },
    {
      "matricula":2584,
      "nombre":"Luigi",
      "edad":23,
      'correo':'luigi@gmail.com',
      'pago':129.25,
      'foto':'https://www.google.com/url?sa=i&url=https%3A%2F%2Famiibo.fandom.com%2Fes%2Fwiki%2FLuigi&psig=AOvVaw3B2ZAYI79PyN5vFCxkmAit&ust=1686797357142000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDzsPvfwf8CFQAAAAAdAAAAABAE'
    },
    {
      "matricula":5555,
      "nombre":"DK",
      "edad":25,
      'correo':'dk@gmail.com',
      'pago':129.25,
      'foto':'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mariowiki.com%2FDonkey_Kong&psig=AOvVaw155Ron6KGReUU7fu3huhpF&ust=1686797409661000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDWqJTgwf8CFQAAAAAdAAAAABAE'
    }
  ]

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

}
