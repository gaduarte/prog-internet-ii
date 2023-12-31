import { ApiProperty } from '@nestjs/swagger';

export enum ProdutoStatus{
    DISPONIVEL = 'DISPONIVEL',
    INDISPONIVEL = 'INDISPONIVEL'
  }

export enum ProdutosLiquidez{
  SIM = 'SIM',
  NAO = 'NAO'
}
  
  export class Produto {
    @ApiProperty()
    id: string;

   
    @ApiProperty()
    nome: string;

    @ApiProperty()
    destinacao: string;

    @ApiProperty()
    taxaRentabilidade: number;

    @ApiProperty()
    taxaAdministracao: number;

    @ApiProperty()
    prazoMinimo: number;

    @ApiProperty()
    vencimento: Date;

    @ApiProperty()
    status: ProdutoStatus;

    @ApiProperty()
    liquidez: ProdutosLiquidez;
  
    constructor() {
      
    }
  
  }
  
 


