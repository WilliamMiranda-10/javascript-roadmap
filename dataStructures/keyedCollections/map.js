let mapa = new Map();

mapa.set("Name", "William");
mapa.set(10,'javascript')
mapa.set("programador", 100)

console.log(mapa)

console.log(mapa.delete('name'))


console.log(mapa.get('Name'))

let pes = 10

if(mapa.has(pes)){
    console.log('A chave existe a coleção com o valor :', mapa.get(pes))
} else{
    console.log('A chave não esta na coleção')
}

console.log('O tamanho da coleção é: ', mapa.size)

mapa.forEach((element)=>{
    console.log(element)
})



