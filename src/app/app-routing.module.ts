import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IricComponent } from './escuela/iric/iric.component';
import { OperaBasComponent } from './escuela/formularios/operas-bas/operas-bas.component';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component';

const routes: Routes = [
  {path: '', redirectTo: '/IricComponent', pathMatch: 'full'},
  {path:'IricComponent', component: IricComponent},
  {path: 'OperasBasComponent', component: OperaBasComponent},
  {path: 'AlumnoReactiveComponent', component: AlumnoReactiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
