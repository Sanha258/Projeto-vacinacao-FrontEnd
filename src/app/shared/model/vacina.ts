import { pais } from "./pais";
import { pessoa } from "./pessoa";


export interface vacina {

  id: number;
	nome: string;
	paisOrigem: pais;
	pesquisadorResponsavel: pessoa;
	dataInicioPesquisa: Date;
	estagio: number;


}
