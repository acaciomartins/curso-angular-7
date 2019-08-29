import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ciclovida',
  templateUrl: './ciclovida.component.html',
  styleUrls: ['./ciclovida.component.css']
})
export class CiclovidaComponent implements OnInit {

  @Input() valorInicial: number = 10;
  
  constructor() {
    console.log("constructor");
  }

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngOnInit() {
    console.log("ngInit");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }
}
