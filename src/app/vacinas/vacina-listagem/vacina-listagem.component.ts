
import { VacinasService } from './../../shared/service/vacinas.service';
import { vacina } from '../../shared/model/vacina';

import { Component, OnInit } from '@angular/core';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seletor';
import { pais } from '../../shared/model/pais';
import { PaisService } from '../../shared/service/pais.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vacina-listagem',
  //standalone: true,
  //imports: [],
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.scss'
})
export class VacinaListagemComponent implements OnInit  {

  public vacinas: Array<vacina> = new Array();
  public seletor: VacinaSeletor = new VacinaSeletor();

  public paises: Array<pais> = new Array();
   track: any;


  constructor(private vacinaService: VacinasService,
              private paisService: PaisService){}

  ngOnInit(): void {
    this.listarTodasVacinas();

    this.paisService.listarTodos().subscribe(
      resultado => {
        this.paises = resultado;
      },
      erro => {
        console.log('Erro ao buscar países' + erro)
      }
    );
  }

  public pesquisar(){
    this.vacinaService.listarComSeletor(this.seletor).subscribe(
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.log('Erro ao buscar todas as vacinas' + erro)
      }
    )
  }

  public limpar(){
    this.seletor = new VacinaSeletor();
  }

  private listarTodasVacinas(){
    this.vacinaService.listarTodas().subscribe(
      resultado => {
         this.vacinas = resultado;
      },
      erro => {
        console.log('Erro ao buscar todas as vacinas' + erro)
      }
    );
  }

  excluir(vacinaSelecionada: vacina){
    Swal.fire({
      title:'Deseja realmente excluir a vacina?',
      text: 'Essa ação não poderá ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) =>{
      if(result.value) {
        this.vacinaService.excluirPorId(vacinaSelecionada.id).subscribe(
          resultado => {
            this.pesquisar();
          },
          erro => {
            Swal.fire('Erro!', 'Erro ao excluir Vacina:' + erro.error.mensagem, 'error');

          }
        );
      }
    });
  }
}

