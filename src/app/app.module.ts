import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CadastroModule } from './cadastro/cadastro.module';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    PagesModule,
    LoginModule,
    CadastroModule,
    PagesRoutingModule,
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
