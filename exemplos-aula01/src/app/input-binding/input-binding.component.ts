import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() nome: string;
  @Input() idade: number;

  constructor() { }

  ngOnInit() {
  }

  receber(event) {
    this.idade += event
  }

}
