const var1 = 'Teste'
const var2 = 'Este é um ' + var1 + '!'
const var3 = 'Template'

const templ = `
    Este
    é
    um
    ${var1}!`

console.log(var2)
console.log(templ)
console.log(`${var1} de template`)

const up = t => t.toUpperCase()
console.log('${var1}')
console.log(`${var1} de ${up(var3)}`)