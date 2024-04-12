import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

listaPensamentos = [
  {
  counteudo: 'Comunicação entre componentes',
  autoria: 'Mateus',
  modelo: 'modelo3'
},
  {
  counteudo: 'testando objeto 2',
  autoria: 'Juliana',
  modelo: 'modelo2'
}
];

  constructor() { }

  ngOnInit(): void {
  }

}
