import { pais } from "./pais";

export interface pessoa {
  id: number;
  nome: String;
  sigla: String;
  cpf: String;
  sexo: String;
  dataNascimento: Date;
  tipo: number;
  paisOrigem: pais;

}

