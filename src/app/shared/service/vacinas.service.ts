import { vacina } from './../model/vacina';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VacinaSeletor } from '../model/seletor/vacina.seletor';

@Injectable({
  providedIn: 'root'
})
export class VacinasService {
  atualizar(vacina: vacina) {
    throw new Error('Method not implemented.');
  }
  buscar(idVacina: number) {
    throw new Error('Method not implemented.');
  }
  salvar(vacinas: vacina) {
    throw new Error('Method not implemented.');
  }
  constructor(private httpClient: HttpClient) {}
  // URL base de API vacinas
  private readonly API ='http://localhost:8080/senac-backend2024.1--William/rest/vacina';

  public listarTodas(): Observable<Array<vacina>> {
    return this.httpClient.get<Array<vacina>>(this.API + "/todos");
  }

  public listarComSeletor(seletor: VacinaSeletor): Observable<Array<vacina>> {
    return this.httpClient.post<Array<vacina>>(this.API + "/filtrar", seletor);
  }

  public listarPorId(id: number): Observable<vacina>{
    return this.httpClient.get<vacina>(this.API + "/" + id);
  }

  public excluirPorId(id: number): Observable<boolean>{
    return this.httpClient.delete<boolean>(this.API + "/" + id);
  }
}




