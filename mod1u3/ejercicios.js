//1
const producto= "cuaderno"
const precio = 2000
const disponible= true

console.log(`El ${producto} cuesta ${precio} y su disponibilidad es ${disponible}`)

//2
//en este ejercicio deberia ser una condición para el usuario no poner entradas en negativo

const metros= 20000

if (metros>=0 && metros<1000){
    console.log("pie")
}
else if (metros>=1000 && metros<10000){
    console.log("bicicleta")
}
else if (metros>=10000 && metros<30000){
    console.log("colectivo")
}
else if (metros>=30000 && metros<100000){
    console.log("auto")
}
else {
    console.log("avion")
}

//3
const productos= ["leche", "huevos", "pan", "jabon"]

for (let i=0; i<productos.length; i++){
    console.log(`No te olvides de comprar ${productos[i]}`)
}

//4
const numeros = [1,2,5,8,2]
let mayor= numeros[0] 

for (let i=0; i<numeros.length; i++){
    if (numeros[i+1]>mayor){
        mayor= numeros[i+1]
    }
    else{
        mayor= mayor
    }
}

console.log(`El mayor de la lista es ${mayor}`)