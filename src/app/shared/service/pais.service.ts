import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { pais } from "../model/pais";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private httpClient: HttpClient) { }

  private readonly API: string = "http://localhost:8080/senac-backend2024.1--William/rest/pais";

  public listarTodos(): Observable<Array<pais>>{
    return this.httpClient.get<Array<pais>>(this.API + '/todos');
  }

}
