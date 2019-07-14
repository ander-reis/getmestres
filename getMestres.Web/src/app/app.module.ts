import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxSpinnerModule } from 'ngx-spinner';

import {
  MatToolbarModule, MatIconModule,
  MatButtonModule, MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatCardModule,
  MatFormField,
  MatInputModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatPaginatorIntl
} from '@angular/material';

import { PedidosPendentesComponent } from './components/pedidos-pendentes/pedidos-pendentes.component';
import { CardsDashboardComponent } from './components/cards-dashboard/cards-dashboard.component';
import { CategorysComponent } from './pages/categorys/categorys.component';
import { CategoryComponent } from './pages/category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getPaginatorIntl } from './shared/paginator-intl';

@NgModule({
  declarations: [
    AppComponent,
    PedidosPendentesComponent,
    CardsDashboardComponent,
    CategorysComponent,
    CategoryComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatPaginatorModule
  ],
  providers: [{
    provide: MatPaginatorIntl, useValue: getPaginatorIntl()
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
