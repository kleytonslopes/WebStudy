const num1 = 2.25
const num2 = Number('9.99')
const num3 = 2.0

console.log(num1, num2)
console.log(Number.isInteger(num1))
console.log(Number.isInteger(num2))

const num4 = 0.987
const num5 = 1.123

const num6 = num4 * num5
const num7 = num6 / 2

console.log(num7)
console.log(num7.toFixed(2))
console.log(num7.toFixed(3))
console.log(num7.toString())
console.log(num7.toString(2))// imprimir o binário
console.log(typeof num7)
console.log(typeof Number)