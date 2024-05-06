import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';
import { CommonModule } from '@angular/common';
import { VacinasRoutingModule } from './vacinas-routing.module';
import { VacinaDetalheComponent } from '../vacina-detalhe/vacina-detalhe.component';




@NgModule({
  declarations: [
    VacinaListagemComponent,
    VacinaDetalheComponent

  ],
  imports: [
    CommonModule,
    VacinasRoutingModule,
    FormsModule
  ]
})
export class VacinasModule { }
