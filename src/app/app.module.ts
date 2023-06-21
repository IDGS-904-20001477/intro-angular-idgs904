import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { escuelaComponent } from './escuela/escuela.component';
import { IricComponent } from './escuela/iric/iric.component';
import { MenuComponent } from './escuela/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumarComponent } from './escuela/formularios/sumar/sumar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasBasComponent } from './escuela/formularios/operas-bas/operas-bas.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    escuelaComponent,
    IricComponent,
    MenuComponent,
    SumarComponent,
    OperasBasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
