const InfoUser = {
    Usuario: {
        "id": 13,
        "senha": "1",
        "nome": "Andrei",
        "cpf": "1",
        "rendas": [],
        "residencias": [
          {
            "id": 16,
            "endereco": "rua legal",
            "comodos": [],
            "contas": [],
            "pessoaId": 13,
            "estoque": null
          }
        ],
        "idade": "10"
      },
    ResidenciaSelecionada: null,

    InserirUsuario: (usuario) => {
        InfoUser.Usuario = usuario,
        InfoUser.InserirResidencia(usuario.residencias[0]);
    },
    InserirResidencia: (residencia) => InfoUser.ResidenciaSelecionada = residencia
}

export {InfoUser}



