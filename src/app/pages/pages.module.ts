import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { ComodoComponent } from './comodo/comodo.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { ContaComponent } from './conta/conta.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ForumComponent } from './forum/forum.component';
import { TutorialComponent } from './tutorial/tutorial.component';



@NgModule({
  declarations: [
    PagesComponent, 
    ComodoComponent, 
    EstoqueComponent, 
    ContaComponent, 
    CalculadoraComponent, 
    ForumComponent, 
    TutorialComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule
  ],
  exports: [
    EstoqueComponent
  ]
})
export class PagesModule { }
