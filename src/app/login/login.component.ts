import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rotas } from 'src/enum/enum';
import { Pessoa } from 'src/models/models';
import { PessoaService } from 'src/services/pessoa.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public rotaCadastro: String = Rotas.Cadastro;

  public formulario: FormGroup
  public logando: boolean = false;

  public ListaPessoaCadastradas: Array<Pessoa> = [];

  constructor(private _formBuilder: FormBuilder,
              private _pessoaService: PessoaService,
              private _router: Router) { }

  ngOnInit(): void {
    this.formulario = this._formBuilder.group({
      cpf: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
  }

  async login(): Promise<void>{

    if(this.formulario.status == 'VALID'){
      await this.RetornaPessoas();
      if(this.VerificaCadastro()){
        this.redirect();
      };
    }

  }

  async RetornaPessoas(): Promise<void> {
    await this._pessoaService.get_all()
                            .toPromise()
                            .then(r => this.ListaPessoaCadastradas = r)
  }

  public VerificaCadastro(): boolean{
  
    if(this.ListaPessoaCadastradas.map(p => { return {cpf: p.cpf, senha: p.senha} })
                                  .some(e => e.cpf == this.formulario.value.cpf && e.senha == this.formulario.value.password)){
      return true
    } else {
      return false;
     }
  }

  public mostrarErros(e): void{

  }

  public redirect(){
    this._router.navigate([Rotas.Principal])
  }
}
