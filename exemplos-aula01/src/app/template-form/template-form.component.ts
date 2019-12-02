import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(formulario) {
    console.log('submeteu', formulario);
    this.http.post('http://localhost:3000/usuarios', formulario.value)
    .subscribe( );
  }

  consultaCEP(cep: any, formulario) {
    console.log(cep);
    this.http.get(`http://viacep.com.br/ws/${cep}/json/`).subscribe(dados => this.preencherForumario(dados, formulario))
  }

  preencherForumario(dados, formulario) {
    console.table(dados);
    formulario.form.patchValue({
      "cep": dados.cep,
      "endereco": dados.logradouro,
      "complemento": dados.complemento,
      "bairro": dados.bairro,
      "cidade": dados.localidade
    });
  };
}
