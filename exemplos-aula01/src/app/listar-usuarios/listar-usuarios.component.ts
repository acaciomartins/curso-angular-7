import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  listaUsuarios: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.http.get('http://localhost:3000/usuarios')
      .subscribe(res => this.populaListaUsuarios(res));
  }

  populaListaUsuarios(res) {
    this.listaUsuarios = res;
  }


}
