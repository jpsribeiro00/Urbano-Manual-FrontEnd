import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Renda, Residencia } from 'src/models/models';
import { PessoaService } from 'src/services/pessoa.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public formulario: FormGroup;

  public endereco = new FormControl('');
  public descricaoRenda = new FormControl('');
  public valorRenda = new FormControl('');

  public enderecos: Array<String> = [];
  public rendas: Array<Renda> = [];

  constructor(private _formBuilder: FormBuilder,
              private _pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.GeraFormulario();
  }

  public GeraFormulario(): void{

    this.formulario = this._formBuilder.group({
      id: 0,
      cpf: ["", [Validators.required]],
      idade: ["", [Validators.required]],
      nome: ["", [Validators.required]],
      senha: ["", [Validators.required]],
      rendas: [[]],
      residencias: [[]]
    });

  }

  public AdicionarEndereco(): void{
    this.enderecos.push(this.endereco.value)
    this.enderecos = [...this.enderecos]
    
    this.formulario.patchValue({
      residencias: this.RetornarResidencias()
    })
    
    this.endereco.patchValue("")

  }

  public CriarResidencia(): Residencia{
    return {
      id: 0,
      comodos: [],
      contas: [],
      endereco: this.endereco.value,
      estoque: null,
      pessoaId: 0
    }
  }

  public RetornarResidencias(): Array<Residencia>{

    var residencias = this.formulario.value.residencias
    residencias.push(this.CriarResidencia());
    return residencias

  }

  public AdicionarRenda(): void{
    this.rendas.push(
      {
        id: 0,
        pessoaId: 0,
        descricao: this.descricaoRenda.value,
        valor: this.valorRenda.value
      }
    )

    this.formulario.patchValue({
      rendas: this.rendas
    })

    this.rendas = [...this.rendas]
    this.descricaoRenda.patchValue("")
    this.valorRenda.patchValue("")
  }

  public SomaRenda(): number {
    return this.rendas.map(r => parseFloat(String(r.valor))).reduce((acc, value) => acc + value, 0);
  }

  public Cadastrar(): void{
    console.log(JSON.stringify(this.formulario.value))

    this._pessoaService.post(this.formulario.value)
      .toPromise()
      .then(r => console.log(r))
      .catch(c => console.log(c))
  }

}
