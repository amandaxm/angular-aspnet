import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {
  titulo= 'Professres'  
  professores=[
    {nome:'Marta'},
    {nome:'Maria'},
    {nome:'Paula'},
    {nome:'Laura'},
    {nome:'Luiza'},
    {nome:'Lucas'},
    {nome:'Pedro'},
    {nome:'Paulo'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
