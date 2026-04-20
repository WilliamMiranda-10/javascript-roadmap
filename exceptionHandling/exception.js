//1: ex try/catch/finally

try {
  let value = undefined;
  console.log(value.toUpperCase());
} catch (error) {
  console.log("Error:", error.message); //Error: Cannot read properties of undefined (reading 'toUpperCase')
} finally {
  console.log("finalizado");
}

// 2: ex error object

try {
  let name = undefined;
  if (!name) {
    throw new Error("O nome é obrigatório");
  }
  console.log(name)
} catch (error) {
  console.log("Menssagem:", error.message);
}

// 3 throw (Validação)

function dividir(a, b){
    if(b === 0){
        throw new Error("Não pode dividir por zero")
    }
    return a / b
}

try {
    console.log('resultado:', dividir(10,60))
} catch (error) {
    console.log('Mensagem:', error.message)
}


//Desafios

function showName(name){
    try {
        if(typeof name !== "string" ){
            throw new Error("O Nome precisa ser uma string")
        }
        console.log(name.toUpperCase())
    } catch (error) {
        console.log('Mensagem:', error.message)
    }
}


showName('William')