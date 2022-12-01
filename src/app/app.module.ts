import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { HttpClientModule } from '@angular/common/http'
import {ButtonModule} from 'primeng/button';

//PrimeNG Modules:
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    DetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
