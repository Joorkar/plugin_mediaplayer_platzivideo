/* // Boolean
let muted: boolean = true
muted = false

// Number
let age = 6
let numerador: number = 42
let denominador: number = age
let resultado = numerador / denominador

// String
let nombre: string = 'Richard'
let saludo = `Me llamo ${nombre}`

// Arrays
let people: string[] = []
people = ['Raquel', 'Ximena', 'Merelym']
// people.push('2002')

let peopleAndNumbers: Array< string | number > = []
peopleAndNumbers.push('Judith')
peopleAndNumbers.push(2021)

// Enum
enum Color {
    Rojo = 'Rojo', // Si no se le da un valor se guarda como un array pero sin sus propiedades
    Verde = 'Verde',
    Azul = 'Azul',
    Amarillo = 'Amarillo'
}

let colorFavorito: Color = Color.Azul
console.log(`Mi color favorito es ${colorFavorito}`)

// Any
let comodin: any = 'Joker'
comodin = { type: 'Wildcard'}

// Object
let someObject: object = { type: 'Wildcard'}
 */

/* function add(a: number, b: number): number {
    return a + b
}

const sum = add(4, 6)

function createAdder(a: number): (number) => number {
    return function (b: number) {
        return b + a
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)


function  fullName(firstName: string, lastName: string = 'Githis'): string {
    return `${firstName} ${lastName}`
}

const raquelita = fullName('Raquel')
console.log(raquelita) */

enum Color {
    rojo = 'Rojo',
    verde = 'Verde'
}

interface Rectangulo {
    ancho: number
    alto: number
    color?: Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.rojo
}

function area(r: Rectangulo) {
    return r.alto * r.ancho
}

const areaRect = area(rect)
console.log(areaRect)

rect.toString = function () {
    return this.color
    ? `Un rectangulo ${this.color}`
    : `Un rectangulo`
}

console.log(rect.toString())
