/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("ControleFrequencia");

// Insert a few documents into the sales collection.

/*db.getCollection("Chamadas").insertMany([
  {
    _id: "CH-12490-P-0101-2026-08-01",
    data: "2026-08-01",
    disciplina: {
      codigo: "12490-P",
      nome: "Estudos de Bancos de Dados 2 - Prática",
      curso: "Engenharia de Software",
      periodo: 4,
      anoCalendario: 2026,
      semestreCalendario: 2,
    },
    turma: {
      codigo: "0101",
      qtdeAtualDeMatriculados: 29,
    },
    docente: {
      RP: "4567890",
      nome: "Steve Jobs",
    },
    aula: {
      dataHoraInicio: "2026-08-01T08:00:00",
      dataHoraFim: "2026-08-01T09:40:00",
      qtdeHorasAula: 2,
      conteudo:
        "Apresentação da disciplina e revisão de modelagem orientada a documentos.",
    },
    resumo: {
      totalAlunos: 5,
      presentes: 4,
      ausentes: 1,
    },
    alunos: [
      {
        RA: "1234",
        nome: "Ayrton Senna",
        presente: true,
      },
      {
        RA: "1235",
        nome: "Ana Clara Souza",
        presente: true,
      },
      {
        RA: "1236",
        nome: "Bruno Henrique Lima",
        presente: false,
        justificativa: "Sem justificativa informada",
      },
      {
        RA: "1237",
        nome: "Camila Ferreira Rocha",
        presente: true,
      },
      {
        RA: "1238",
        nome: "Diego Martins Alves",
        presente: true,
      },
    ],
  },
  {
    _id: "CH-12490-P-0101-2026-08-07",
    data: "2026-08-07",
    disciplina: {
      codigo: "12490-P",
      nome: "Estudos de Bancos de Dados 2 - Prática",
      curso: "Engenharia de Software",
      periodo: 4,
      anoCalendario: 2026,
      semestreCalendario: 2,
    },
    turma: {
      codigo: "0101",
      qtdeAtualDeMatriculados: 29,
    },
    docente: {
      RP: "4567890",
      nome: "Steve Jobs",
    },
    aula: {
      dataHoraInicio: "2026-08-07T08:00:00",
      dataHoraFim: "2026-08-07T09:40:00",
      qtdeHorasAula: 2,
      conteudo:
        "Discussão sobre agregação, referências e desnormalização controlada.",
    },
    resumo: {
      totalAlunos: 5,
      presentes: 5,
      ausentes: 0,
    },
    alunos: [
      {
        RA: "1234",
        nome: "Ayrton Senna",
        presente: true,
      },
      {
        RA: "1235",
        nome: "Ana Clara Souza",
        presente: true,
      },
      {
        RA: "1236",
        nome: "Bruno Henrique Lima",
        presente: true,
      },
      {
        RA: "1237",
        nome: "Camila Ferreira Rocha",
        presente: true,
      },
      {
        RA: "1238",
        nome: "Diego Martins Alves",
        presente: true,
      },
    ],
  },
  {
    _id: "CH-12490-P-0102-2026-08-02",
    data: "2026-08-02",
    disciplina: {
      codigo: "12490-P",
      nome: "Estudos de Bancos de Dados 2 - Prática",
      curso: "Engenharia de Software",
      periodo: 4,
      anoCalendario: 2026,
      semestreCalendario: 2,
    },
    turma: {
      codigo: "0102",
      qtdeAtualDeMatriculados: 40,
    },
    docente: {
      RP: "890392",
      nome: "Ada Lovelace",
    },
    aula: {
      dataHoraInicio: "2026-08-02T10:00:00",
      dataHoraFim: "2026-08-02T11:40:00",
      qtdeHorasAula: 2,
      conteudo:
        "Introdução a bancos orientados a documentos e desenho de coleções.",
    },
    resumo: {
      totalAlunos: 5,
      presentes: 4,
      ausentes: 1,
    },
    alunos: [
      {
        RA: "2234",
        nome: "Eduarda Pereira Nunes",
        presente: true,
      },
      {
        RA: "2235",
        nome: "Felipe Augusto Ribeiro",
        presente: true,
      },
      {
        RA: "2236",
        nome: "Giovana Costa Melo",
        presente: true,
      },
      {
        RA: "2237",
        nome: "Henrique Batista Gomes",
        presente: false,
        justificativa: "Atestado pendente",
      },
      {
        RA: "2238",
        nome: "Isabela Moura Cardoso",
        presente: true,
      },
    ],
  },
  {
    _id: "CH-12490-P-0102-2026-08-08",
    data: "2026-08-08",
    disciplina: {
      codigo: "12490-P",
      nome: "Estudos de Bancos de Dados 2 - Prática",
      curso: "Engenharia de Software",
      periodo: 4,
      anoCalendario: 2026,
      semestreCalendario: 2,
    },
    turma: {
      codigo: "0102",
      qtdeAtualDeMatriculados: 40,
    },
    docente: {
      RP: "890392",
      nome: "Ada Lovelace",
    },
    aula: {
      dataHoraInicio: "2026-08-08T10:00:00",
      dataHoraFim: "2026-08-08T11:40:00",
      qtdeHorasAula: 2,
      conteudo:
        "Modelagem de chamada por aula com snapshot de disciplina, turma e docente.",
    },
    resumo: {
      totalAlunos: 5,
      presentes: 5,
      ausentes: 0,
    },
    alunos: [
      {
        RA: "2234",
        nome: "Eduarda Pereira Nunes",
        presente: true,
      },
      {
        RA: "2235",
        nome: "Felipe Augusto Ribeiro",
        presente: true,
      },
      {
        RA: "2236",
        nome: "Giovana Costa Melo",
        presente: true,
      },
      {
        RA: "2237",
        nome: "Henrique Batista Gomes",
        presente: true,
      },
      {
        RA: "2238",
        nome: "Isabela Moura Cardoso",
        presente: true,
      },
    ],
  },
  {
    _id: "CH-12491-T-0101-2026-08-03",
    data: "2026-08-03",
    disciplina: {
      codigo: "12491-T",
      nome: "Estudos de Bancos de Dados 2 - Teórica",
      curso: "Engenharia de Software",
      periodo: 4,
      anoCalendario: 2026,
      semestreCalendario: 2,
    },
    turma: {
      codigo: "0101",
      qtdeAtualDeMatriculados: 5,
    },
    docente: {
      RP: "112233",
      nome: "Alan Turing",
    },
    aula: {
      dataHoraInicio: "2026-08-03T08:00:00",
      dataHoraFim: "2026-08-03T09:40:00",
      qtdeHorasAula: 2,
      conteudo: "Fundamentos teóricos de modelos de dados NoSQL.",
    },
    resumo: {
      totalAlunos: 5,
      presentes: 5,
      ausentes: 0,
    },
    alunos: [
      {
        RA: "1234",
        nome: "Ayrton Senna",
        presente: true,
      },
      {
        RA: "1235",
        nome: "Ana Clara Souza",
        presente: true,
      },
      {
        RA: "1236",
        nome: "Bruno Henrique Lima",
        presente: true,
      },
      {
        RA: "1237",
        nome: "Camila Ferreira Rocha",
        presente: true,
      },
      {
        RA: "1238",
        nome: "Diego Martins Alves",
        presente: true,
      },
    ],
  },
  {
    _id: "CH-12491-T-0101-2026-08-10",
    data: "2026-08-10",
    disciplina: {
      codigo: "12491-T",
      nome: "Estudos de Bancos de Dados 2 - Teórica",
      curso: "Engenharia de Software",
      periodo: 4,
      anoCalendario: 2026,
      semestreCalendario: 2,
    },
    turma: {
      codigo: "0101",
      qtdeAtualDeMatriculados: 5,
    },
    docente: {
      RP: "112233",
      nome: "Alan Turing",
    },
    aula: {
      dataHoraInicio: "2026-08-10T08:00:00",
      dataHoraFim: "2026-08-10T09:40:00",
      qtdeHorasAula: 2,
      conteudo: "Consistência eventual e teorema CAP.",
    },
    resumo: {
      totalAlunos: 5,
      presentes: 4,
      ausentes: 1,
    },
    alunos: [
      {
        RA: "1234",
        nome: "Ayrton Senna",
        presente: true,
      },
      {
        RA: "1235",
        nome: "Ana Clara Souza",
        presente: false,
        justificativa: "Sem justificativa informada",
      },
      {
        RA: "1236",
        nome: "Bruno Henrique Lima",
        presente: true,
      },
      {
        RA: "1237",
        nome: "Camila Ferreira Rocha",
        presente: true,
      },
      {
        RA: "1238",
        nome: "Diego Martins Alves",
        presente: true,
      },
    ],
  },
  {
    _id: "CH-20010-P-0101-2026-08-04",
    data: "2026-08-04",
    disciplina: {
      codigo: "20010-P",
      nome: "Estrutura de Dados",
      curso: "Engenharia de Software",
      periodo: 2,
      anoCalendario: 2026,
      semestreCalendario: 2,
    },
    turma: {
      codigo: "0101",
      qtdeAtualDeMatriculados: 5,
    },
    docente: {
      RP: "223344",
      nome: "Grace Hopper",
    },
    aula: {
      dataHoraInicio: "2026-08-04T10:00:00",
      dataHoraFim: "2026-08-04T11:40:00",
      qtdeHorasAula: 2,
      conteudo: "Listas encadeadas e complexidade de operações.",
    },
    resumo: {
      totalAlunos: 5,
      presentes: 5,
      ausentes: 0,
    },
    alunos: [
      {
        RA: "2234",
        nome: "Eduarda Pereira Nunes",
        presente: true,
      },
      {
        RA: "2235",
        nome: "Felipe Augusto Ribeiro",
        presente: true,
      },
      {
        RA: "2236",
        nome: "Giovana Costa Melo",
        presente: true,
      },
      {
        RA: "2237",
        nome: "Henrique Batista Gomes",
        presente: true,
      },
      {
        RA: "2238",
        nome: "Isabela Moura Cardoso",
        presente: true,
      },
    ],
  },
  {
    _id: "CH-20010-P-0101-2026-08-11",
    data: "2026-08-11",
    disciplina: {
      codigo: "20010-P",
      nome: "Estrutura de Dados",
      curso: "Engenharia de Software",
      periodo: 2,
      anoCalendario: 2026,
      semestreCalendario: 2,
    },
    turma: {
      codigo: "0101",
      qtdeAtualDeMatriculados: 5,
    },
    docente: {
      RP: "223344",
      nome: "Grace Hopper",
    },
    aula: {
      dataHoraInicio: "2026-08-11T10:00:00",
      dataHoraFim: "2026-08-11T11:40:00",
      qtdeHorasAula: 2,
      conteudo: "Pilhas, filas e árvores binárias.",
    },
    resumo: {
      totalAlunos: 5,
      presentes: 4,
      ausentes: 1,
    },
    alunos: [
      {
        RA: "2234",
        nome: "Eduarda Pereira Nunes",
        presente: true,
      },
      {
        RA: "2235",
        nome: "Felipe Augusto Ribeiro",
        presente: true,
      },
      {
        RA: "2236",
        nome: "Giovana Costa Melo",
        presente: false,
        justificativa: "Consulta médica",
      },
      {
        RA: "2237",
        nome: "Henrique Batista Gomes",
        presente: true,
      },
      {
        RA: "2238",
        nome: "Isabela Moura Cardoso",
        presente: true,
      },
    ],
  },
  {
    _id: "CH-30100-P-0101-2026-08-05",
    data: "2026-08-05",
    disciplina: {
      codigo: "30100-P",
      nome: "Engenharia de Software 1",
      curso: "Engenharia de Software",
      periodo: 3,
      anoCalendario: 2026,
      semestreCalendario: 2,
    },
    turma: {
      codigo: "0101",
      qtdeAtualDeMatriculados: 5,
    },
    docente: {
      RP: "445566",
      nome: "Margaret Hamilton",
    },
    aula: {
      dataHoraInicio: "2026-08-05T08:00:00",
      dataHoraFim: "2026-08-05T09:40:00",
      qtdeHorasAula: 2,
      conteudo: "Levantamento de requisitos e ciclo de vida de software.",
    },
    resumo: {
      totalAlunos: 5,
      presentes: 5,
      ausentes: 0,
    },
    alunos: [
      {
        RA: "1234",
        nome: "Ayrton Senna",
        presente: true,
      },
      {
        RA: "1235",
        nome: "Ana Clara Souza",
        presente: true,
      },
      {
        RA: "1236",
        nome: "Bruno Henrique Lima",
        presente: true,
      },
      {
        RA: "1237",
        nome: "Camila Ferreira Rocha",
        presente: true,
      },
      {
        RA: "1238",
        nome: "Diego Martins Alves",
        presente: true,
      },
    ],
  },
  {
    _id: "CH-30100-P-0101-2026-08-12",
    data: "2026-08-12",
    disciplina: {
      codigo: "30100-P",
      nome: "Engenharia de Software 1",
      curso: "Engenharia de Software",
      periodo: 3,
      anoCalendario: 2026,
      semestreCalendario: 2,
    },
    turma: {
      codigo: "0101",
      qtdeAtualDeMatriculados: 5,
    },
    docente: {
      RP: "445566",
      nome: "Margaret Hamilton",
    },
    aula: {
      dataHoraInicio: "2026-08-12T08:00:00",
      dataHoraFim: "2026-08-12T09:40:00",
      qtdeHorasAula: 2,
      conteudo: "Metodologias ágeis e planejamento de sprints.",
    },
    resumo: {
      totalAlunos: 5,
      presentes: 4,
      ausentes: 1,
    },
    alunos: [
      {
        RA: "1234",
        nome: "Ayrton Senna",
        presente: true,
      },
      {
        RA: "1235",
        nome: "Ana Clara Souza",
        presente: true,
      },
      {
        RA: "1236",
        nome: "Bruno Henrique Lima",
        presente: true,
      },
      {
        RA: "1237",
        nome: "Camila Ferreira Rocha",
        presente: false,
        justificativa: "Atestado médico",
      },
      {
        RA: "1238",
        nome: "Diego Martins Alves",
        presente: true,
      },
    ],
  },
]);*/

db.createCollection("Disciplinas").insertMany([
  {
    codigo: "12490-P",
    nome: "Estudos de Bancos de Dados 2 - Prática",
    cargaHorariaTotal: 40,
    curso: "Engenharia de Software",
    periodo: 4,
    anoCalendario: 2026,
    semestreCalendario: 2,
    turmas: [
      {
        codigo: "0101",
        qtdeInicialDeMatriculados: 30,
        qtdeAtualDeMatriculados: 29,
        trancamentos: 0,
        desistencias: 0,
        transferencias: 1,
        docente: {
          RP: "4567890",
          nome: "Steve Jobs",
        },
        agendaDeAulas: [
          {
            dataHoraInicio: "2026-08-01T08:00:00",
            dataHoraFim: "2026-08-01T09:40:00",
            qtdeHorasAula: 2,
          },
          {
            dataHoraInicio: "2026-08-07T08:00:00",
            dataHoraFim: "2026-08-07T09:40:00",
            qtdeHorasAula: 2,
          },
        ],
      },
      {
        codigo: "0102",
        qtdeInicialDeMatriculados: 40,
        qtdeAtualDeMatriculados: 40,
        trancamentos: 0,
        desistencias: 0,
        transferencias: 0,
        docente: {
          RP: "890392",
          nome: "Ada Lovelace",
        },
        agendaDeAulas: [
          {
            dataHoraInicio: "2026-08-02T10:00:00",
            dataHoraFim: "2026-08-02T11:40:00",
            qtdeHorasAula: 2,
          },
          {
            dataHoraInicio: "2026-08-08T10:00:00",
            dataHoraFim: "2026-08-08T11:40:00",
            qtdeHorasAula: 2,
          },
        ],
      },
    ],
  },
  {
    codigo: "12491-T",
    nome: "Estudos de Bancos de Dados 2 - Teórica",
    cargaHorariaTotal: 40,
    curso: "Engenharia de Software",
    periodo: 4,
    anoCalendario: 2026,
    semestreCalendario: 2,
    turmas: [
      {
        codigo: "0101",
        qtdeInicialDeMatriculados: 5,
        qtdeAtualDeMatriculados: 5,
        trancamentos: 0,
        desistencias: 0,
        transferencias: 0,
        docente: {
          RP: "112233",
          nome: "Alan Turing",
        },
        agendaDeAulas: [
          {
            dataHoraInicio: "2026-08-03T08:00:00",
            dataHoraFim: "2026-08-03T09:40:00",
            qtdeHorasAula: 2,
          },
          {
            dataHoraInicio: "2026-08-10T08:00:00",
            dataHoraFim: "2026-08-10T09:40:00",
            qtdeHorasAula: 2,
          },
        ],
      },
    ],
  },
  {
    codigo: "20010-P",
    nome: "Estrutura de Dados",
    cargaHorariaTotal: 80,
    curso: "Engenharia de Software",
    periodo: 2,
    anoCalendario: 2026,
    semestreCalendario: 2,
    turmas: [
      {
        codigo: "0101",
        qtdeInicialDeMatriculados: 5,
        qtdeAtualDeMatriculados: 5,
        trancamentos: 0,
        desistencias: 0,
        transferencias: 0,
        docente: {
          RP: "223344",
          nome: "Grace Hopper",
        },
        agendaDeAulas: [
          {
            dataHoraInicio: "2026-08-04T10:00:00",
            dataHoraFim: "2026-08-04T11:40:00",
            qtdeHorasAula: 2,
          },
          {
            dataHoraInicio: "2026-08-11T10:00:00",
            dataHoraFim: "2026-08-11T11:40:00",
            qtdeHorasAula: 2,
          },
        ],
      },
    ],
  },
  {
    codigo: "20011-T",
    nome: "Estrutura de Dados - Teórica",
    cargaHorariaTotal: 40,
    curso: "Engenharia de Software",
    periodo: 2,
    anoCalendario: 2026,
    semestreCalendario: 2,
    turmas: [
      {
        codigo: "0101",
        qtdeInicialDeMatriculados: 35,
        qtdeAtualDeMatriculados: 34,
        trancamentos: 1,
        desistencias: 0,
        transferencias: 0,
        docente: {
          RP: "334455",
          nome: "Linus Torvalds",
        },
        agendaDeAulas: [
          {
            dataHoraInicio: "2026-08-04T14:00:00",
            dataHoraFim: "2026-08-04T15:40:00",
            qtdeHorasAula: 2,
          },
          {
            dataHoraInicio: "2026-08-11T14:00:00",
            dataHoraFim: "2026-08-11T15:40:00",
            qtdeHorasAula: 2,
          },
        ],
      },
    ],
  },
  {
    codigo: "30100-P",
    nome: "Engenharia de Software 1",
    cargaHorariaTotal: 80,
    curso: "Engenharia de Software",
    periodo: 3,
    anoCalendario: 2026,
    semestreCalendario: 2,
    turmas: [
      {
        codigo: "0101",
        qtdeInicialDeMatriculados: 5,
        qtdeAtualDeMatriculados: 5,
        trancamentos: 0,
        desistencias: 0,
        transferencias: 0,
        docente: {
          RP: "445566",
          nome: "Margaret Hamilton",
        },
        agendaDeAulas: [
          {
            dataHoraInicio: "2026-08-05T08:00:00",
            dataHoraFim: "2026-08-05T09:40:00",
            qtdeHorasAula: 2,
          },
          {
            dataHoraInicio: "2026-08-12T08:00:00",
            dataHoraFim: "2026-08-12T09:40:00",
            qtdeHorasAula: 2,
          },
        ],
      },
    ],
  },
  {
    codigo: "30200-P",
    nome: "Sistemas Operacionais",
    cargaHorariaTotal: 80,
    curso: "Engenharia de Software",
    periodo: 3,
    anoCalendario: 2026,
    semestreCalendario: 2,
    turmas: [
      {
        codigo: "0101",
        qtdeInicialDeMatriculados: 28,
        qtdeAtualDeMatriculados: 28,
        trancamentos: 0,
        desistencias: 0,
        transferencias: 0,
        docente: {
          RP: "556677",
          nome: "Tim Berners-Lee",
        },
        agendaDeAulas: [
          {
            dataHoraInicio: "2026-08-05T10:00:00",
            dataHoraFim: "2026-08-05T11:40:00",
            qtdeHorasAula: 2,
          },
          {
            dataHoraInicio: "2026-08-12T10:00:00",
            dataHoraFim: "2026-08-12T11:40:00",
            qtdeHorasAula: 2,
          },
        ],
      },
    ],
  },
  {
    codigo: "40010-P",
    nome: "Redes de Computadores",
    cargaHorariaTotal: 60,
    curso: "Engenharia de Software",
    periodo: 5,
    anoCalendario: 2026,
    semestreCalendario: 2,
    turmas: [
      {
        codigo: "0101",
        qtdeInicialDeMatriculados: 32,
        qtdeAtualDeMatriculados: 31,
        trancamentos: 0,
        desistencias: 1,
        transferencias: 0,
        docente: {
          RP: "667788",
          nome: "Katherine Johnson",
        },
        agendaDeAulas: [
          {
            dataHoraInicio: "2026-08-06T08:00:00",
            dataHoraFim: "2026-08-06T09:40:00",
            qtdeHorasAula: 2,
          },
          {
            dataHoraInicio: "2026-08-13T08:00:00",
            dataHoraFim: "2026-08-13T09:40:00",
            qtdeHorasAula: 2,
          },
        ],
      },
    ],
  },
  {
    codigo: "40020-P",
    nome: "Compiladores",
    cargaHorariaTotal: 60,
    curso: "Engenharia de Software",
    periodo: 6,
    anoCalendario: 2026,
    semestreCalendario: 2,
    turmas: [
      {
        codigo: "0101",
        qtdeInicialDeMatriculados: 25,
        qtdeAtualDeMatriculados: 25,
        trancamentos: 0,
        desistencias: 0,
        transferencias: 0,
        docente: {
          RP: "778899",
          nome: "Dennis Ritchie",
        },
        agendaDeAulas: [
          {
            dataHoraInicio: "2026-08-06T10:00:00",
            dataHoraFim: "2026-08-06T11:40:00",
            qtdeHorasAula: 2,
          },
          {
            dataHoraInicio: "2026-08-13T10:00:00",
            dataHoraFim: "2026-08-13T11:40:00",
            qtdeHorasAula: 2,
          },
        ],
      },
    ],
  },
  {
    codigo: "50010-P",
    nome: "Programação Orientada a Objetos",
    cargaHorariaTotal: 60,
    curso: "Engenharia de Software",
    periodo: 2,
    anoCalendario: 2026,
    semestreCalendario: 2,
    turmas: [
      {
        codigo: "0101",
        qtdeInicialDeMatriculados: 38,
        qtdeAtualDeMatriculados: 37,
        trancamentos: 0,
        desistencias: 0,
        transferencias: 1,
        docente: {
          RP: "889900",
          nome: "Barbara Liskov",
        },
        agendaDeAulas: [
          {
            dataHoraInicio: "2026-08-01T14:00:00",
            dataHoraFim: "2026-08-01T15:40:00",
            qtdeHorasAula: 2,
          },
          {
            dataHoraInicio: "2026-08-08T14:00:00",
            dataHoraFim: "2026-08-08T15:40:00",
            qtdeHorasAula: 2,
          },
        ],
      },
    ],
  },
  {
    codigo: "50020-P",
    nome: "Inteligência Artificial",
    cargaHorariaTotal: 60,
    curso: "Engenharia de Software",
    periodo: 6,
    anoCalendario: 2026,
    semestreCalendario: 2,
    turmas: [
      {
        codigo: "0101",
        qtdeInicialDeMatriculados: 45,
        qtdeAtualDeMatriculados: 44,
        trancamentos: 1,
        desistencias: 0,
        transferencias: 0,
        docente: {
          RP: "4567890",
          nome: "Steve Jobs",
        },
        agendaDeAulas: [
          {
            dataHoraInicio: "2026-08-02T14:00:00",
            dataHoraFim: "2026-08-02T15:40:00",
            qtdeHorasAula: 2,
          },
          {
            dataHoraInicio: "2026-08-09T14:00:00",
            dataHoraFim: "2026-08-09T15:40:00",
            qtdeHorasAula: 2,
          },
        ],
      },
    ],
  },
]);
