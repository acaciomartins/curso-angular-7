import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  color: string= 'btn-outline-primary';
  btnDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  chamar1() {
    console.log('chamar1');
    this.btnDisabled = !this.btnDisabled;
  }
}
