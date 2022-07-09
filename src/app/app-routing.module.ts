import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'login'
  // },
  // {
  //   path: '**',
  //   redirectTo: 'login',
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

