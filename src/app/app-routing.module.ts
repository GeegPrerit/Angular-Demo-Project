import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiConsuptionComponent } from './api-consuption/api-consuption.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',component:NavbarComponent,children:[
      {path:'ApiConsuption',component:ApiConsuptionComponent},
      {path:'Pipes',component:PipesComponent},
      {path:'ReactiveForm',component:ReactiveFormComponent},
      {path:'Home',component:HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
