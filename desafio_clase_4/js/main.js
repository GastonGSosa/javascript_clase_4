

const MONEDAS={
    "peso": 1,
    "dolar": 215,
    "euro": 230,
    "bitcoin": 2744070
}

let valor,moneda
do{
    valor=parseFloat(prompt('Por favor, ingrese cuántos pesos tiene :'))
    moneda=prompt('Por favor, elija a cuál moneda convertirá (Peso, Dolar, Euro, Bitcoin): ')
}while (isNaN(valor) || moneda==='')

moneda=moneda.toLowerCase()

const convertir = (plata,moneda) => plata / moneda

switch(moneda){
    case 'peso':
        alert('Usted tiene ' + convertir(valor,MONEDAS[moneda])+ ' pesos.')
        break
    case 'dolar':
        alert('Usted tiene ' + convertir(valor,MONEDAS[moneda])+ ' dolares.')
        break
    case 'euro':
        alert('Usted tiene ' + convertir(valor,MONEDAS[moneda])+ ' euros.')
        break
    case 'bitcoin':
        alert('Usted tiene ' + convertir(valor,MONEDAS[moneda])+ ' bitcoins.')
        break
    default:
        alert('Operación inválida.')
        break

}






