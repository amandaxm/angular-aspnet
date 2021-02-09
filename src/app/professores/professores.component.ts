import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {
  titulo= 'Professores'  
  professores=[
    {id:1, nome:'Lauro', sobrenome:'Paulo', disciplina:'Matematica'},
    {id:2, nome:'Caio', sobrenome:'Carlo', disciplina:'Geografia'},
    {id:3, nome:'Carla', sobrenome:'Rodrigues', disciplina:'Portugues'},
    {id:4, nome:'Leticia', sobrenome:'Teste', disciplina:'Fisica'},
     ]
  constructor() { }

  ngOnInit() {
  }

}
