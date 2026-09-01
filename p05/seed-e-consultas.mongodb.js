// MongoDB Playground
// Banco: ControleFrequencia
// Como usar: abra este arquivo no VSCode (extensão "MongoDB for VS Code"),
// conecte-se à sua conexão, selecione o banco ControleFrequencia (ou deixe
// o use() abaixo fazer isso) e clique em "Run All" para popular o banco,
// ou selecione um bloco de consulta e "Run Selected Lines" para testá-lo.

use('ControleFrequencia');

// ============================================================
// 1) SEED — limpa e insere os 10 documentos de cada coleção
// ============================================================

db.professores.deleteMany({});
db.professores.insertMany([
  { "RP": "4567890", "nome": "Steve Jobs" },
  { "RP": "890392", "nome": "Ada Lovelace" },
  { "RP": "112233", "nome": "Alan Turing" },
  { "RP": "223344", "nome": "Grace Hopper" },
  { "RP": "334455", "nome": "Linus Torvalds" },
  { "RP": "445566", "nome": "Margaret Hamilton" },
  { "RP": "556677", "nome": "Tim Berners-Lee" },
  { "RP": "667788", "nome": "Katherine Johnson" },
  { "RP": "778899", "nome": "Dennis Ritchie" },
  { "RP": "889900", "nome": "Barbara Liskov" }
]);

db.disciplinas.deleteMany({});
db.disciplinas.insertMany([
  {
    "codigo": "12490-P",
    "nome": "Estudos de Bancos de Dados 2 - Prática",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 30,
        "qtdeAtualDeMatriculados": 29,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 1,
        "docente": { "RP": "4567890", "nome": "Steve Jobs" },
        "agendaDeAulas": [
          { "dataHoraInicio": "2026-08-01T08:00:00", "dataHoraFim": "2026-08-01T09:40:00", "qtdeHorasAula": 2 },
          { "dataHoraInicio": "2026-08-07T08:00:00", "dataHoraFim": "2026-08-07T09:40:00", "qtdeHorasAula": 2 }
        ]
      },
      {
        "codigo": "0102",
        "qtdeInicialDeMatriculados": 40,
        "qtdeAtualDeMatriculados": 40,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": { "RP": "890392", "nome": "Ada Lovelace" },
        "agendaDeAulas": [
          { "dataHoraInicio": "2026-08-02T10:00:00", "dataHoraFim": "2026-08-02T11:40:00", "qtdeHorasAula": 2 },
          { "dataHoraInicio": "2026-08-08T10:00:00", "dataHoraFim": "2026-08-08T11:40:00", "qtdeHorasAula": 2 }
        ]
      }
    ]
  },
  {
    "codigo": "12491-T",
    "nome": "Estudos de Bancos de Dados 2 - Teórica",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 4,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 5,
        "qtdeAtualDeMatriculados": 5,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": { "RP": "112233", "nome": "Alan Turing" },
        "agendaDeAulas": [
          { "dataHoraInicio": "2026-08-03T08:00:00", "dataHoraFim": "2026-08-03T09:40:00", "qtdeHorasAula": 2 },
          { "dataHoraInicio": "2026-08-10T08:00:00", "dataHoraFim": "2026-08-10T09:40:00", "qtdeHorasAula": 2 }
        ]
      }
    ]
  },
  {
    "codigo": "20010-P",
    "nome": "Estrutura de Dados",
    "cargaHorariaTotal": 80,
    "curso": "Engenharia de Software",
    "periodo": 2,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 5,
        "qtdeAtualDeMatriculados": 5,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": { "RP": "223344", "nome": "Grace Hopper" },
        "agendaDeAulas": [
          { "dataHoraInicio": "2026-08-04T10:00:00", "dataHoraFim": "2026-08-04T11:40:00", "qtdeHorasAula": 2 },
          { "dataHoraInicio": "2026-08-11T10:00:00", "dataHoraFim": "2026-08-11T11:40:00", "qtdeHorasAula": 2 }
        ]
      }
    ]
  },
  {
    "codigo": "20011-T",
    "nome": "Estrutura de Dados - Teórica",
    "cargaHorariaTotal": 40,
    "curso": "Engenharia de Software",
    "periodo": 2,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 35,
        "qtdeAtualDeMatriculados": 34,
        "trancamentos": 1,
        "desistencias": 0,
        "transferencias": 0,
        "docente": { "RP": "334455", "nome": "Linus Torvalds" },
        "agendaDeAulas": [
          { "dataHoraInicio": "2026-08-04T14:00:00", "dataHoraFim": "2026-08-04T15:40:00", "qtdeHorasAula": 2 },
          { "dataHoraInicio": "2026-08-11T14:00:00", "dataHoraFim": "2026-08-11T15:40:00", "qtdeHorasAula": 2 }
        ]
      }
    ]
  },
  {
    "codigo": "30100-P",
    "nome": "Engenharia de Software 1",
    "cargaHorariaTotal": 80,
    "curso": "Engenharia de Software",
    "periodo": 3,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 5,
        "qtdeAtualDeMatriculados": 5,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": { "RP": "445566", "nome": "Margaret Hamilton" },
        "agendaDeAulas": [
          { "dataHoraInicio": "2026-08-05T08:00:00", "dataHoraFim": "2026-08-05T09:40:00", "qtdeHorasAula": 2 },
          { "dataHoraInicio": "2026-08-12T08:00:00", "dataHoraFim": "2026-08-12T09:40:00", "qtdeHorasAula": 2 }
        ]
      }
    ]
  },
  {
    "codigo": "30200-P",
    "nome": "Sistemas Operacionais",
    "cargaHorariaTotal": 80,
    "curso": "Engenharia de Software",
    "periodo": 3,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 28,
        "qtdeAtualDeMatriculados": 28,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": { "RP": "556677", "nome": "Tim Berners-Lee" },
        "agendaDeAulas": [
          { "dataHoraInicio": "2026-08-05T10:00:00", "dataHoraFim": "2026-08-05T11:40:00", "qtdeHorasAula": 2 },
          { "dataHoraInicio": "2026-08-12T10:00:00", "dataHoraFim": "2026-08-12T11:40:00", "qtdeHorasAula": 2 }
        ]
      }
    ]
  },
  {
    "codigo": "40010-P",
    "nome": "Redes de Computadores",
    "cargaHorariaTotal": 60,
    "curso": "Engenharia de Software",
    "periodo": 5,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 32,
        "qtdeAtualDeMatriculados": 31,
        "trancamentos": 0,
        "desistencias": 1,
        "transferencias": 0,
        "docente": { "RP": "667788", "nome": "Katherine Johnson" },
        "agendaDeAulas": [
          { "dataHoraInicio": "2026-08-06T08:00:00", "dataHoraFim": "2026-08-06T09:40:00", "qtdeHorasAula": 2 },
          { "dataHoraInicio": "2026-08-13T08:00:00", "dataHoraFim": "2026-08-13T09:40:00", "qtdeHorasAula": 2 }
        ]
      }
    ]
  },
  {
    "codigo": "40020-P",
    "nome": "Compiladores",
    "cargaHorariaTotal": 60,
    "curso": "Engenharia de Software",
    "periodo": 6,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 25,
        "qtdeAtualDeMatriculados": 25,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 0,
        "docente": { "RP": "778899", "nome": "Dennis Ritchie" },
        "agendaDeAulas": [
          { "dataHoraInicio": "2026-08-06T10:00:00", "dataHoraFim": "2026-08-06T11:40:00", "qtdeHorasAula": 2 },
          { "dataHoraInicio": "2026-08-13T10:00:00", "dataHoraFim": "2026-08-13T11:40:00", "qtdeHorasAula": 2 }
        ]
      }
    ]
  },
  {
    "codigo": "50010-P",
    "nome": "Programação Orientada a Objetos",
    "cargaHorariaTotal": 60,
    "curso": "Engenharia de Software",
    "periodo": 2,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 38,
        "qtdeAtualDeMatriculados": 37,
        "trancamentos": 0,
        "desistencias": 0,
        "transferencias": 1,
        "docente": { "RP": "889900", "nome": "Barbara Liskov" },
        "agendaDeAulas": [
          { "dataHoraInicio": "2026-08-01T14:00:00", "dataHoraFim": "2026-08-01T15:40:00", "qtdeHorasAula": 2 },
          { "dataHoraInicio": "2026-08-08T14:00:00", "dataHoraFim": "2026-08-08T15:40:00", "qtdeHorasAula": 2 }
        ]
      }
    ]
  },
  {
    "codigo": "50020-P",
    "nome": "Inteligência Artificial",
    "cargaHorariaTotal": 60,
    "curso": "Engenharia de Software",
    "periodo": 6,
    "anoCalendario": 2026,
    "semestreCalendario": 2,
    "turmas": [
      {
        "codigo": "0101",
        "qtdeInicialDeMatriculados": 45,
        "qtdeAtualDeMatriculados": 44,
        "trancamentos": 1,
        "desistencias": 0,
        "transferencias": 0,
        "docente": { "RP": "4567890", "nome": "Steve Jobs" },
        "agendaDeAulas": [
          { "dataHoraInicio": "2026-08-02T14:00:00", "dataHoraFim": "2026-08-02T15:40:00", "qtdeHorasAula": 2 },
          { "dataHoraInicio": "2026-08-09T14:00:00", "dataHoraFim": "2026-08-09T15:40:00", "qtdeHorasAula": 2 }
        ]
      }
    ]
  }
]);

db.estudantes.deleteMany({});
db.estudantes.insertMany([
  {
    "RA": "1234", "nome": "Ayrton Senna", "curso": "Engenharia de Software", "periodo": 4,
    "matriculas": [
      { "disciplinaCodigo": "12490-P", "disciplinaNome": "Estudos de Bancos de Dados 2 - Prática", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" },
      { "disciplinaCodigo": "12491-T", "disciplinaNome": "Estudos de Bancos de Dados 2 - Teórica", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" },
      { "disciplinaCodigo": "30100-P", "disciplinaNome": "Engenharia de Software 1", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" }
    ]
  },
  {
    "RA": "1235", "nome": "Ana Clara Souza", "curso": "Engenharia de Software", "periodo": 4,
    "matriculas": [
      { "disciplinaCodigo": "12490-P", "disciplinaNome": "Estudos de Bancos de Dados 2 - Prática", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" },
      { "disciplinaCodigo": "12491-T", "disciplinaNome": "Estudos de Bancos de Dados 2 - Teórica", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" },
      { "disciplinaCodigo": "30100-P", "disciplinaNome": "Engenharia de Software 1", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" }
    ]
  },
  {
    "RA": "1236", "nome": "Bruno Henrique Lima", "curso": "Engenharia de Software", "periodo": 4,
    "matriculas": [
      { "disciplinaCodigo": "12490-P", "disciplinaNome": "Estudos de Bancos de Dados 2 - Prática", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" },
      { "disciplinaCodigo": "12491-T", "disciplinaNome": "Estudos de Bancos de Dados 2 - Teórica", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" },
      { "disciplinaCodigo": "30100-P", "disciplinaNome": "Engenharia de Software 1", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" }
    ]
  },
  {
    "RA": "1237", "nome": "Camila Ferreira Rocha", "curso": "Engenharia de Software", "periodo": 4,
    "matriculas": [
      { "disciplinaCodigo": "12490-P", "disciplinaNome": "Estudos de Bancos de Dados 2 - Prática", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" },
      { "disciplinaCodigo": "12491-T", "disciplinaNome": "Estudos de Bancos de Dados 2 - Teórica", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" },
      { "disciplinaCodigo": "30100-P", "disciplinaNome": "Engenharia de Software 1", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" }
    ]
  },
  {
    "RA": "1238", "nome": "Diego Martins Alves", "curso": "Engenharia de Software", "periodo": 4,
    "matriculas": [
      { "disciplinaCodigo": "12490-P", "disciplinaNome": "Estudos de Bancos de Dados 2 - Prática", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" },
      { "disciplinaCodigo": "12491-T", "disciplinaNome": "Estudos de Bancos de Dados 2 - Teórica", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" },
      { "disciplinaCodigo": "30100-P", "disciplinaNome": "Engenharia de Software 1", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" }
    ]
  },
  {
    "RA": "2234", "nome": "Eduarda Pereira Nunes", "curso": "Engenharia de Software", "periodo": 4,
    "matriculas": [
      { "disciplinaCodigo": "12490-P", "disciplinaNome": "Estudos de Bancos de Dados 2 - Prática", "turmaCodigo": "0102", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" },
      { "disciplinaCodigo": "20010-P", "disciplinaNome": "Estrutura de Dados", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" }
    ]
  },
  {
    "RA": "2235", "nome": "Felipe Augusto Ribeiro", "curso": "Engenharia de Software", "periodo": 4,
    "matriculas": [
      { "disciplinaCodigo": "12490-P", "disciplinaNome": "Estudos de Bancos de Dados 2 - Prática", "turmaCodigo": "0102", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" },
      { "disciplinaCodigo": "20010-P", "disciplinaNome": "Estrutura de Dados", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" }
    ]
  },
  {
    "RA": "2236", "nome": "Giovana Costa Melo", "curso": "Engenharia de Software", "periodo": 4,
    "matriculas": [
      { "disciplinaCodigo": "12490-P", "disciplinaNome": "Estudos de Bancos de Dados 2 - Prática", "turmaCodigo": "0102", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" },
      { "disciplinaCodigo": "20010-P", "disciplinaNome": "Estrutura de Dados", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" }
    ]
  },
  {
    "RA": "2237", "nome": "Henrique Batista Gomes", "curso": "Engenharia de Software", "periodo": 4,
    "matriculas": [
      { "disciplinaCodigo": "12490-P", "disciplinaNome": "Estudos de Bancos de Dados 2 - Prática", "turmaCodigo": "0102", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" },
      { "disciplinaCodigo": "20010-P", "disciplinaNome": "Estrutura de Dados", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" }
    ]
  },
  {
    "RA": "2238", "nome": "Isabela Moura Cardoso", "curso": "Engenharia de Software", "periodo": 4,
    "matriculas": [
      { "disciplinaCodigo": "12490-P", "disciplinaNome": "Estudos de Bancos de Dados 2 - Prática", "turmaCodigo": "0102", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" },
      { "disciplinaCodigo": "20010-P", "disciplinaNome": "Estrutura de Dados", "turmaCodigo": "0101", "anoCalendario": 2026, "semestreCalendario": 2, "situacao": "matriculado" }
    ]
  }
]);

db.chamadas.deleteMany({});
db.chamadas.insertMany([
  {
    "_id": "CH-12490-P-0101-2026-08-01", "data": "2026-08-01",
    "disciplina": { "codigo": "12490-P", "nome": "Estudos de Bancos de Dados 2 - Prática", "curso": "Engenharia de Software", "periodo": 4, "anoCalendario": 2026, "semestreCalendario": 2 },
    "turma": { "codigo": "0101", "qtdeAtualDeMatriculados": 29 },
    "docente": { "RP": "4567890", "nome": "Steve Jobs" },
    "aula": { "dataHoraInicio": "2026-08-01T08:00:00", "dataHoraFim": "2026-08-01T09:40:00", "qtdeHorasAula": 2, "conteudo": "Apresentação da disciplina e revisão de modelagem orientada a documentos." },
    "resumo": { "totalAlunos": 5, "presentes": 4, "ausentes": 1 },
    "alunos": [
      { "RA": "1234", "nome": "Ayrton Senna", "presente": true },
      { "RA": "1235", "nome": "Ana Clara Souza", "presente": true },
      { "RA": "1236", "nome": "Bruno Henrique Lima", "presente": false, "justificativa": "Sem justificativa informada" },
      { "RA": "1237", "nome": "Camila Ferreira Rocha", "presente": true },
      { "RA": "1238", "nome": "Diego Martins Alves", "presente": true }
    ]
  },
  {
    "_id": "CH-12490-P-0101-2026-08-07", "data": "2026-08-07",
    "disciplina": { "codigo": "12490-P", "nome": "Estudos de Bancos de Dados 2 - Prática", "curso": "Engenharia de Software", "periodo": 4, "anoCalendario": 2026, "semestreCalendario": 2 },
    "turma": { "codigo": "0101", "qtdeAtualDeMatriculados": 29 },
    "docente": { "RP": "4567890", "nome": "Steve Jobs" },
    "aula": { "dataHoraInicio": "2026-08-07T08:00:00", "dataHoraFim": "2026-08-07T09:40:00", "qtdeHorasAula": 2, "conteudo": "Discussão sobre agregação, referências e desnormalização controlada." },
    "resumo": { "totalAlunos": 5, "presentes": 5, "ausentes": 0 },
    "alunos": [
      { "RA": "1234", "nome": "Ayrton Senna", "presente": true },
      { "RA": "1235", "nome": "Ana Clara Souza", "presente": true },
      { "RA": "1236", "nome": "Bruno Henrique Lima", "presente": true },
      { "RA": "1237", "nome": "Camila Ferreira Rocha", "presente": true },
      { "RA": "1238", "nome": "Diego Martins Alves", "presente": true }
    ]
  },
  {
    "_id": "CH-12490-P-0102-2026-08-02", "data": "2026-08-02",
    "disciplina": { "codigo": "12490-P", "nome": "Estudos de Bancos de Dados 2 - Prática", "curso": "Engenharia de Software", "periodo": 4, "anoCalendario": 2026, "semestreCalendario": 2 },
    "turma": { "codigo": "0102", "qtdeAtualDeMatriculados": 40 },
    "docente": { "RP": "890392", "nome": "Ada Lovelace" },
    "aula": { "dataHoraInicio": "2026-08-02T10:00:00", "dataHoraFim": "2026-08-02T11:40:00", "qtdeHorasAula": 2, "conteudo": "Introdução a bancos orientados a documentos e desenho de coleções." },
    "resumo": { "totalAlunos": 5, "presentes": 4, "ausentes": 1 },
    "alunos": [
      { "RA": "2234", "nome": "Eduarda Pereira Nunes", "presente": true },
      { "RA": "2235", "nome": "Felipe Augusto Ribeiro", "presente": true },
      { "RA": "2236", "nome": "Giovana Costa Melo", "presente": true },
      { "RA": "2237", "nome": "Henrique Batista Gomes", "presente": false, "justificativa": "Atestado pendente" },
      { "RA": "2238", "nome": "Isabela Moura Cardoso", "presente": true }
    ]
  },
  {
    "_id": "CH-12490-P-0102-2026-08-08", "data": "2026-08-08",
    "disciplina": { "codigo": "12490-P", "nome": "Estudos de Bancos de Dados 2 - Prática", "curso": "Engenharia de Software", "periodo": 4, "anoCalendario": 2026, "semestreCalendario": 2 },
    "turma": { "codigo": "0102", "qtdeAtualDeMatriculados": 40 },
    "docente": { "RP": "890392", "nome": "Ada Lovelace" },
    "aula": { "dataHoraInicio": "2026-08-08T10:00:00", "dataHoraFim": "2026-08-08T11:40:00", "qtdeHorasAula": 2, "conteudo": "Modelagem de chamada por aula com snapshot de disciplina, turma e docente." },
    "resumo": { "totalAlunos": 5, "presentes": 5, "ausentes": 0 },
    "alunos": [
      { "RA": "2234", "nome": "Eduarda Pereira Nunes", "presente": true },
      { "RA": "2235", "nome": "Felipe Augusto Ribeiro", "presente": true },
      { "RA": "2236", "nome": "Giovana Costa Melo", "presente": true },
      { "RA": "2237", "nome": "Henrique Batista Gomes", "presente": true },
      { "RA": "2238", "nome": "Isabela Moura Cardoso", "presente": true }
    ]
  },
  {
    "_id": "CH-12491-T-0101-2026-08-03", "data": "2026-08-03",
    "disciplina": { "codigo": "12491-T", "nome": "Estudos de Bancos de Dados 2 - Teórica", "curso": "Engenharia de Software", "periodo": 4, "anoCalendario": 2026, "semestreCalendario": 2 },
    "turma": { "codigo": "0101", "qtdeAtualDeMatriculados": 5 },
    "docente": { "RP": "112233", "nome": "Alan Turing" },
    "aula": { "dataHoraInicio": "2026-08-03T08:00:00", "dataHoraFim": "2026-08-03T09:40:00", "qtdeHorasAula": 2, "conteudo": "Fundamentos teóricos de modelos de dados NoSQL." },
    "resumo": { "totalAlunos": 5, "presentes": 5, "ausentes": 0 },
    "alunos": [
      { "RA": "1234", "nome": "Ayrton Senna", "presente": true },
      { "RA": "1235", "nome": "Ana Clara Souza", "presente": true },
      { "RA": "1236", "nome": "Bruno Henrique Lima", "presente": true },
      { "RA": "1237", "nome": "Camila Ferreira Rocha", "presente": true },
      { "RA": "1238", "nome": "Diego Martins Alves", "presente": true }
    ]
  },
  {
    "_id": "CH-12491-T-0101-2026-08-10", "data": "2026-08-10",
    "disciplina": { "codigo": "12491-T", "nome": "Estudos de Bancos de Dados 2 - Teórica", "curso": "Engenharia de Software", "periodo": 4, "anoCalendario": 2026, "semestreCalendario": 2 },
    "turma": { "codigo": "0101", "qtdeAtualDeMatriculados": 5 },
    "docente": { "RP": "112233", "nome": "Alan Turing" },
    "aula": { "dataHoraInicio": "2026-08-10T08:00:00", "dataHoraFim": "2026-08-10T09:40:00", "qtdeHorasAula": 2, "conteudo": "Consistência eventual e teorema CAP." },
    "resumo": { "totalAlunos": 5, "presentes": 4, "ausentes": 1 },
    "alunos": [
      { "RA": "1234", "nome": "Ayrton Senna", "presente": true },
      { "RA": "1235", "nome": "Ana Clara Souza", "presente": false, "justificativa": "Sem justificativa informada" },
      { "RA": "1236", "nome": "Bruno Henrique Lima", "presente": true },
      { "RA": "1237", "nome": "Camila Ferreira Rocha", "presente": true },
      { "RA": "1238", "nome": "Diego Martins Alves", "presente": true }
    ]
  },
  {
    "_id": "CH-20010-P-0101-2026-08-04", "data": "2026-08-04",
    "disciplina": { "codigo": "20010-P", "nome": "Estrutura de Dados", "curso": "Engenharia de Software", "periodo": 2, "anoCalendario": 2026, "semestreCalendario": 2 },
    "turma": { "codigo": "0101", "qtdeAtualDeMatriculados": 5 },
    "docente": { "RP": "223344", "nome": "Grace Hopper" },
    "aula": { "dataHoraInicio": "2026-08-04T10:00:00", "dataHoraFim": "2026-08-04T11:40:00", "qtdeHorasAula": 2, "conteudo": "Listas encadeadas e complexidade de operações." },
    "resumo": { "totalAlunos": 5, "presentes": 5, "ausentes": 0 },
    "alunos": [
      { "RA": "2234", "nome": "Eduarda Pereira Nunes", "presente": true },
      { "RA": "2235", "nome": "Felipe Augusto Ribeiro", "presente": true },
      { "RA": "2236", "nome": "Giovana Costa Melo", "presente": true },
      { "RA": "2237", "nome": "Henrique Batista Gomes", "presente": true },
      { "RA": "2238", "nome": "Isabela Moura Cardoso", "presente": true }
    ]
  },
  {
    "_id": "CH-20010-P-0101-2026-08-11", "data": "2026-08-11",
    "disciplina": { "codigo": "20010-P", "nome": "Estrutura de Dados", "curso": "Engenharia de Software", "periodo": 2, "anoCalendario": 2026, "semestreCalendario": 2 },
    "turma": { "codigo": "0101", "qtdeAtualDeMatriculados": 5 },
    "docente": { "RP": "223344", "nome": "Grace Hopper" },
    "aula": { "dataHoraInicio": "2026-08-11T10:00:00", "dataHoraFim": "2026-08-11T11:40:00", "qtdeHorasAula": 2, "conteudo": "Pilhas, filas e árvores binárias." },
    "resumo": { "totalAlunos": 5, "presentes": 4, "ausentes": 1 },
    "alunos": [
      { "RA": "2234", "nome": "Eduarda Pereira Nunes", "presente": true },
      { "RA": "2235", "nome": "Felipe Augusto Ribeiro", "presente": true },
      { "RA": "2236", "nome": "Giovana Costa Melo", "presente": false, "justificativa": "Consulta médica" },
      { "RA": "2237", "nome": "Henrique Batista Gomes", "presente": true },
      { "RA": "2238", "nome": "Isabela Moura Cardoso", "presente": true }
    ]
  },
  {
    "_id": "CH-30100-P-0101-2026-08-05", "data": "2026-08-05",
    "disciplina": { "codigo": "30100-P", "nome": "Engenharia de Software 1", "curso": "Engenharia de Software", "periodo": 3, "anoCalendario": 2026, "semestreCalendario": 2 },
    "turma": { "codigo": "0101", "qtdeAtualDeMatriculados": 5 },
    "docente": { "RP": "445566", "nome": "Margaret Hamilton" },
    "aula": { "dataHoraInicio": "2026-08-05T08:00:00", "dataHoraFim": "2026-08-05T09:40:00", "qtdeHorasAula": 2, "conteudo": "Levantamento de requisitos e ciclo de vida de software." },
    "resumo": { "totalAlunos": 5, "presentes": 5, "ausentes": 0 },
    "alunos": [
      { "RA": "1234", "nome": "Ayrton Senna", "presente": true },
      { "RA": "1235", "nome": "Ana Clara Souza", "presente": true },
      { "RA": "1236", "nome": "Bruno Henrique Lima", "presente": true },
      { "RA": "1237", "nome": "Camila Ferreira Rocha", "presente": true },
      { "RA": "1238", "nome": "Diego Martins Alves", "presente": true }
    ]
  },
  {
    "_id": "CH-30100-P-0101-2026-08-12", "data": "2026-08-12",
    "disciplina": { "codigo": "30100-P", "nome": "Engenharia de Software 1", "curso": "Engenharia de Software", "periodo": 3, "anoCalendario": 2026, "semestreCalendario": 2 },
    "turma": { "codigo": "0101", "qtdeAtualDeMatriculados": 5 },
    "docente": { "RP": "445566", "nome": "Margaret Hamilton" },
    "aula": { "dataHoraInicio": "2026-08-12T08:00:00", "dataHoraFim": "2026-08-12T09:40:00", "qtdeHorasAula": 2, "conteudo": "Metodologias ágeis e planejamento de sprints." },
    "resumo": { "totalAlunos": 5, "presentes": 4, "ausentes": 1 },
    "alunos": [
      { "RA": "1234", "nome": "Ayrton Senna", "presente": true },
      { "RA": "1235", "nome": "Ana Clara Souza", "presente": true },
      { "RA": "1236", "nome": "Bruno Henrique Lima", "presente": true },
      { "RA": "1237", "nome": "Camila Ferreira Rocha", "presente": false, "justificativa": "Atestado médico" },
      { "RA": "1238", "nome": "Diego Martins Alves", "presente": true }
    ]
  }
]);

print('Seed concluído: professores, disciplinas, estudantes e chamadas (10 documentos cada).');

// ============================================================
// 2) CONSULTAS — selecione um bloco e rode com "Run Selected Lines"
// ============================================================

// --- professores -------------------------------------------------

// Todos os professores
db.professores.find();

// Buscar professor por RP
db.professores.findOne({ RP: '4567890' });

// Buscar professor por nome (case-insensitive, substring)
db.professores.find({ nome: { $regex: 'ada', $options: 'i' } });

// Contar quantos professores existem
db.professores.countDocuments();

// --- disciplinas ---------------------------------------------------

// Todas as disciplinas (apenas código, nome e curso)
db.disciplinas.find({}, { codigo: 1, nome: 1, curso: 1, _id: 0 });

// Buscar disciplina por código
db.disciplinas.findOne({ codigo: '12490-P' });

// Disciplinas de um período específico
db.disciplinas.find({ periodo: 4 });

// Disciplinas em que um professor (por RP) dá aula em alguma turma
db.disciplinas.find({ 'turmas.docente.RP': '4567890' });

// Turmas com trancamentos ou desistências (indício de evasão)
db.disciplinas.find({
  $or: [
    { 'turmas.trancamentos': { $gt: 0 } },
    { 'turmas.desistencias': { $gt: 0 } }
  ]
});

// Listar cada disciplina + turma + docente + matriculados atuais (desaninhando turmas)
db.disciplinas.aggregate([
  { $unwind: '$turmas' },
  {
    $project: {
      _id: 0,
      disciplina: '$nome',
      turma: '$turmas.codigo',
      docente: '$turmas.docente.nome',
      matriculados: '$turmas.qtdeAtualDeMatriculados'
    }
  }
]);

// Total de turmas e de matriculados atuais por disciplina
db.disciplinas.aggregate([
  { $unwind: '$turmas' },
  {
    $group: {
      _id: { codigo: '$codigo', nome: '$nome' },
      totalTurmas: { $sum: 1 },
      totalMatriculados: { $sum: '$turmas.qtdeAtualDeMatriculados' }
    }
  },
  { $sort: { totalMatriculados: -1 } }
]);

// --- estudantes ------------------------------------------------------

// Todos os estudantes
db.estudantes.find();

// Buscar estudante por RA
db.estudantes.findOne({ RA: '1234' });

// Estudantes matriculados em uma disciplina/turma específica
db.estudantes.find({
  matriculas: {
    $elemMatch: { disciplinaCodigo: '12490-P', turmaCodigo: '0101' }
  }
});

// Estudantes matriculados em mais de 2 disciplinas
db.estudantes.find({
  $expr: { $gt: [{ $size: '$matriculas' }, 2] }
});

// Quantidade de matrículas por estudante
db.estudantes.aggregate([
  {
    $project: {
      _id: 0,
      RA: 1,
      nome: 1,
      qtdeMatriculas: { $size: '$matriculas' }
    }
  },
  { $sort: { qtdeMatriculas: -1 } }
]);

// Quantos estudantes estão matriculados em cada disciplina
db.estudantes.aggregate([
  { $unwind: '$matriculas' },
  {
    $group: {
      _id: '$matriculas.disciplinaNome',
      totalAlunos: { $sum: 1 }
    }
  },
  { $sort: { totalAlunos: -1 } }
]);

// --- chamadas ----------------------------------------------------------

// Todas as chamadas, ordenadas por data
db.chamadas.find().sort({ data: 1 });

// Chamadas de uma disciplina específica
db.chamadas.find({ 'disciplina.codigo': '12490-P' });

// Chamadas dadas por um professor específico (por RP)
db.chamadas.find({ 'docente.RP': '890392' });

// Chamadas em que houve pelo menos uma ausência
db.chamadas.find({ 'resumo.ausentes': { $gt: 0 } });

// Histórico de presença de um aluno específico (por RA) em todas as chamadas
db.chamadas.aggregate([
  { $unwind: '$alunos' },
  { $match: { 'alunos.RA': '1234' } },
  {
    $project: {
      _id: 0,
      data: 1,
      disciplina: '$disciplina.nome',
      turma: '$turma.codigo',
      presente: '$alunos.presente'
    }
  },
  { $sort: { data: 1 } }
]);

// Total de faltas por aluno (em todas as chamadas)
db.chamadas.aggregate([
  { $unwind: '$alunos' },
  { $match: { 'alunos.presente': false } },
  {
    $group: {
      _id: { RA: '$alunos.RA', nome: '$alunos.nome' },
      totalFaltas: { $sum: 1 }
    }
  },
  { $sort: { totalFaltas: -1 } }
]);

// Percentual de presença por turma (disciplina + código da turma)
db.chamadas.aggregate([
  {
    $group: {
      _id: { disciplina: '$disciplina.nome', turma: '$turma.codigo' },
      totalPresentes: { $sum: '$resumo.presentes' },
      totalAlunosContabilizados: { $sum: '$resumo.totalAlunos' }
    }
  },
  {
    $project: {
      _id: 1,
      percentualPresenca: {
        $round: [
          { $multiply: [{ $divide: ['$totalPresentes', '$totalAlunosContabilizados'] }, 100] },
          1
        ]
      }
    }
  },
  { $sort: { percentualPresenca: 1 } }
]);
