# Título incorreto: Dicionário de dados:

Sistema de locação de veículos

> Incorreto porque é genérico demais.

# Título mais adequado: Dicionário de dados do

Sistema de Locação de Veículos automotores de passeio da Localiza/SA

> Esse título especifica que o dicionario de dados se aplica ao contexto apenas de locação de veículos para a empresa Localiza/SA (O QUE e PARA QUEM)

## Histórico de revisões (ou versões)

| DATA       | AUTOR                     | VERSÃO | OBSERVAÇÕES                                                                                 |
| ---------- | ------------------------- | ------ | ------------------------------------------------------------------------------------------- |
| 10/08/2026 | João Pedro Panza Mainieri | 1.0.0  | Versão inicial do dicinário de dados especificando as entidades: Cliente, Veículo e Locação |

## Entidades

A seguir são documentadas as entidades e seus dados (atributos) que serão necessárias para suportar todas as operações que o sistema de locação necessita.

### 1. Cliente

Descrição: Representa uma pessoa física ou jurídica (empresa) que aluga um ou mais veículos ao longo do tempo. É importante destacar que clientes que nunca alugaram um veículo, devem ser representados também.

ATRIBUTOS:

| NOME      | TIPO                                  | OBRIGATORIEDADE | EXEMPLOS/COMENTÁRIOS                                                                                                                                                                                                                                                                                                                      |
| --------- | ------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CÓDIGO    | INTEIRO ÚNICO                         | SIM             | Este dado diferencia o cliente em relação aos demais em todas as partes do sistema. São Aceitos números de 1 a (maior inteiro longo possível), acrescidos de um em um.                                                                                                                                                                    |
| TIPO      | LISTA LITERAL E ESTÁTICA DE VALORES   | SIM             | A lista ;e composta de apenas dois valores: FÍSICA (pessoa física) e JURÍDICA (empresa). Não devem ser acrescentados valores futuros e só deve ser atribuído um único valor para o tipo: FÍSICA ou JURÍDICA.                                                                                                                              |
| DOCUMENTO | PAR CHAVE-VALOR                       | SIM             | Chave é uma lista estática contendo: "CPF", "CNPJ", "PASSAPORTE" (pesquisar se o passaporte serve para emissão de um docuemento fiscal, caso o cliente seja estrangeiro). Valor : Conteúdo textual do documento com formatacão própria.                                                                                                   |
| NOME      | STRING LIVRE SEM CARACTERES ESPECIAIS | SIM             | Este é o campo que armazenará pela primeira vez o nome do cliente. Após a emissão da primeira nota fiscal, nome ou razão social da empresa é corrigido de acordo com a receita federal (se for um cliente nacional). Sempre o nome será armazenado em maiúsculo para não ter variações ou problemas de formatação em relatórios e listas. |

<br>
<hr>

# MISSÃO : COMPLETAR A ENTIDADE CLIENTE E FAZER AS ENTIDADES VEICULO E LOCAÇÃO
