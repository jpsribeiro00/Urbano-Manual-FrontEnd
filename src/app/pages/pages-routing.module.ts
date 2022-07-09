import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ComodoComponent } from './comodo/comodo.component';
import { ContaComponent } from './conta/conta.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { ForumComponent } from './forum/forum.component';
import { PagesComponent } from './pages.component';
import { TutorialComponent } from './tutorial/tutorial.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
          {
            path: 'comodo',
            component: ComodoComponent,
          },
          {
            path: 'estoque',
            component: EstoqueComponent,
          },
          {
            path: 'conta',
            component: ContaComponent,
          },
          {
            path: 'calculadora',
            component: CalculadoraComponent,
          },
          {
            path: 'forum',
            component: ForumComponent,
          },
          {
            path: 'tutorial',
            component: TutorialComponent,
          }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
