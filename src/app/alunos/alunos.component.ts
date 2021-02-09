import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  titulo= 'Alunos'  
  alunos=[
    {id:1 ,nome:'Marta', sobrenome:'Kante', telefone: 322255},
    {id:2 ,nome:'Maria', sobrenome:'Isa', telefone: 3226645},
    {id:3 ,nome:'Paula', sobrenome:'Bela', telefone: 3299255},
    {id:4 ,nome:'Laura', sobrenome:'Kob', telefone: 32265},
    {id:5, nome:'Luiza', sobrenome:'Mel', telefone: 322253},
    {id:6 ,nome:'Lucas', sobrenome:'Penteado', telefone: 3112255},
    {id: 7,nome:'Pedro', sobrenome:'Ken', telefone: 3223255},
    {id: 8,nome:'Paulo', sobrenome:'Nunes', telefone: 325255},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
