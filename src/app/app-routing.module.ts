import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { ListagemComponent } from './listagem/listagem.component';

const routes: Routes = [
  { path: 'listagem', component: ListagemComponent }, 
  { path: 'detalhes/:id', component: DetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
