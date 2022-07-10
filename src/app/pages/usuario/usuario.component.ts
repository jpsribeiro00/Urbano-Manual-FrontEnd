import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rotas } from 'src/enum/enum';
import { InfoUser } from 'src/global/global';
import { PessoaService } from 'src/services/pessoa.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public formulario: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _pessoaService: PessoaService,
              private _router: Router) { }

  ngOnInit(): void {
    this.formulario = this._formBuilder.group({
      id: InfoUser.Usuario.id,
      cpf: [InfoUser.Usuario.cpf, [Validators.required]],
      idade: [InfoUser.Usuario.idade, [Validators.required]],
      nome: [InfoUser.Usuario.nome, [Validators.required]],
      senha: [InfoUser.Usuario.senha, [Validators.required]],
      rendas: [InfoUser.Usuario.rendas],
      residencias: [InfoUser.Usuario.residencias]
    });
  }

  public delete(): void{
    this._pessoaService.delete(this.formulario.value.id)
      .toPromise()
      .then(r => this.redirect())
  }

  public put(): void{
    this._pessoaService.put(this.formulario.value)
      .toPromise()
      .then(e => console.log(e))
      .catch(e => console.log(e))
  }

  public redirect(){
    this._router.navigate([Rotas.Login])
  }

}
