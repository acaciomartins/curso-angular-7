import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exemplos-aula01';

  valor: number = 5;
  destruir: boolean = false;

  mudarValor() {
    this.valor++;
  }

  destruirCiclo() {
    this.destruir = true;
  }
}
