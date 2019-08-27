import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  primeiroNome : string = 'Acácio';
  idade : number = 35;
  
  constructor() { }

  ngOnInit() {
  }

}
