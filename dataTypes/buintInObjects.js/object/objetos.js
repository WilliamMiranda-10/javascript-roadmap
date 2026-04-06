//Um objeto pode ser criado com chaves {} com lista opcional de propriedades
// Podemos adicionar, remover e ler arquivos dele a qualquer momento.
//Uma propriedade é um par de "chave: valor"
//ex:


let usuario = {
    nome: 'William', 
    idade: 30
    //Aqui temos duas propriedades 
    //A primeira temos a chave 'nome' e valor 'william'
    //A segunda temos a chave 'idade' e valor '30'
}

console.log(typeof usuario) //object

// para acessa os valores das propriedades usa se ponto
// ex:

console.log(usuario.nome)//William

// adicionar uma propriedade

usuario.cidade = 'Jaru'
console.log(usuario) // { nome: 'William', idade: 30, cidade: 'Jaru' }


// para remover, usa "delete" operador

delete usuario.idade 
console.log(usuario) //{ nome: 'William', cidade: 'Jaru' }


//pode usar nomes de propriedades com varias palavras
//ex

usuario['Estado civil']= 'casado'
console.log(usuario) //{ nome: 'William', cidade: 'Jaru', 'Estado civil': 'casado' }

// ultilizando o valor da propriedade do objeto
console.log('Meu estado civil é', usuario['Estado civil']) // Meu estado civil é casado

let key = 'Estado civil'

usuario[key] = 'solteiro'
console.log(usuario)


delete usuario['Estado civil'] //exclui a propriedade 

console.log(usuario) //{ nome: 'William', cidade: 'Jaru' }

// Uma variavel nao pode ter nomes igual a uma palavra reservada
// porem para uma propriedade de objeto, nao existe esta restrição
let objPalavrasRes = {
    for: true,
    let: 'ok',
    return: 3
}

console.log(objPalavrasRes)