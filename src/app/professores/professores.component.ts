import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {
  titulo= 'Professores';
  professorSelecionado?: Professor;  
  professores=[
    {id:1, nome:'Lauro',  disciplina:'Matematica'},
    {id:2, nome:'Caio',  disciplina:'Geografia'},
    {id:3, nome:'Carla',  disciplina:'Portugues'},
    {id:4, nome:'Leticia', disciplina:'Fisica'},
     ]
     professorSelect(professor: Professor){
      this.professorSelecionado = professor;
    }
  
    v(){
      this.professorSelecionado = undefined;
    }
  constructor() { }

  ngOnInit() {
  }

}
