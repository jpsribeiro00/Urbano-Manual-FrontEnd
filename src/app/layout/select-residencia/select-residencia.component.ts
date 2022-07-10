import { Component, OnInit } from '@angular/core';
import { InfoUser } from 'src/global/global';
import { Residencia } from 'src/models/models';
import { PessoaService } from 'src/services/pessoa.service';

@Component({
  selector: 'app-select-residencia',
  templateUrl: './select-residencia.component.html',
  styleUrls: ['./select-residencia.component.scss']
})
export class SelectResidenciaComponent implements OnInit {

  public residencias: Residencia[] = InfoUser.Usuario.residencias

  constructor() { }

  ngOnInit(): void {
  }

  public SelecionarResidencia(residencia: Residencia): void{
    InfoUser.InserirResidencia(residencia);
  }

}
