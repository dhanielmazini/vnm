import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construcoes',
  templateUrl: '../empreendimentos/empreendimentos.component.html',
  styleUrls: ['./construcoes.component.scss']
})
export class ConstrucoesComponent implements OnInit {

  urlImagem1 = 'https://loremflickr.com/640/480/house?random=1';
  urlImagem2 = 'https://loremflickr.com/640/480/house?random=2';
  urlImagem3 = 'https://loremflickr.com/640/480/house?random=3';

  constructor() { }

  ngOnInit() {
  }

}
