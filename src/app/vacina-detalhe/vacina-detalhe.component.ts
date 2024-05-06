import { VacinasService } from './../shared/service/vacinas.service';
import { vacina } from './../shared/model/vacina';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-vacina-detalhe',
  //standalone: true,
  //imports: [],
  templateUrl: './vacina-detalhe.component.html',
  styleUrl: './vacina-detalhe.component.scss'
})
export class VacinaDetalheComponent implements OnInit {

  public vacina: vacina = new vacina();
  public idVacina: number;

  constructor(private VacinasService: VacinasService,
              private router: Router, // componente para roteamento entre telas
              private route: ActivatedRoute // componente para pegar os parametros da URL
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idVacina = params["id"];
      if(this.idVacina){
        this.buscarVacina();
      }
    });
  }

  buscarVacina(): void {
    this.VacinasService.buscar(this.idVacina).subscribe(
      (vacina: vacina) => {
        this.vacina = vacina;
      }
      (erro) => {
        Swal.fire("Erro ao buscar a Vacina!", erro, "error");
      }
    );
  }

  salvar(): void {
    if(this.idVacina) {
      this.atualizar();

    }else{
      this.inserir();
    }
  }

  inserir(): void {
    this.VacinasService.salvar(this.vacina).subscribe(
      (resposta) => {
        Swal.fire("Vacina salva com sucesso!", "", "success");
        this.voltar();
      },
      (erro) => {
        Swal.fire("Erro ao salvar a vacina:" + erro.error.mensagem, "error");
      }
    );
  }

  atualizar(): void {
    this.VacinasService.atualizar(this.vacina).subscribe(
      resposta => {
        Swal.fire("Vacina atualizada com sucesso!", "", "success");
        this.voltar();
      },
      erro => {
        Swal.fire("Erro ao atualizar a Vacina:" + erro.error.mensagem, "error");
      }
    );
  }

  voltar(): void {
    this.router.navigate(['/src/app/vacinas']);
  }

}
