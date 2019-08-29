import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipe',
  templateUrl: './exemplo-pipe.component.html',
  styleUrls: ['./exemplo-pipe.component.css']
})
export class ExemploPipeComponent implements OnInit {

  livro:any = {
    titulo: 'Poderoso Chefão',
    nota: '4.9875',
    numeroPaginas: 100,
    preco: 50.88,
    dataLancamento: new Date(2019,1,30),
  }

  constructor() { }

  ngOnInit() {
  }

}
