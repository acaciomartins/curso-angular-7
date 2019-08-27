import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  showNome = false;
  showNomeCompleto = false;

  nomes = ['Ana', 'Maria', 'José', 'Paulo'];

  cidades = [
    {
      nome: 'São Paulo',
      sigla: 'SP'
    },
    {
      nome: 'Rio de Janeiro',
      sigla: 'RJ'
    }
  ]

  tipoCampo = 'checkbox';
  constructor() { }

  ngOnInit() {
  }

}
