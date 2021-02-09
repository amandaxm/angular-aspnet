import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {
  titulo= 'Professores';
  professorSelecionado: any;  
  professores=[
    {id:1, nome:'Lauro', sobrenome:'Paulo', disciplina:'Matematica'},
    {id:2, nome:'Caio', sobrenome:'Carlo', disciplina:'Geografia'},
    {id:3, nome:'Carla', sobrenome:'Rodrigues', disciplina:'Portugues'},
    {id:4, nome:'Leticia', sobrenome:'Teste', disciplina:'Fisica'},
     ]
     professorSelect(professor: any){
      this.professorSelecionado = professor.nome;
    }
  
    v(){
      this.professorSelecionado = '';
    }
  constructor() { }

  ngOnInit() {
  }

}
