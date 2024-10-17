import { Component, OnInit } from '@angular/core';
import { cursos } from './mocks';
import { Curso } from 'src/app/models/curso-to';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css']
})
export class TablaCursosComponent implements OnInit {

  public cursos?: Curso[]

  constructor() { }

  ngOnInit(): void {
    this.cursos = cursos
  }

}
