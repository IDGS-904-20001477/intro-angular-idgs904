import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OperasBasComponent } from './operas-bas.component';



@NgModule({
  declarations: [
    OperasBasComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    MatInputModule
  ],
  exports:[
    OperasBasComponent
  ]
})
export class OperasBasModule { }
