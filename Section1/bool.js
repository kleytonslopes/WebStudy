let b1 = false
console.log(b1)

b1 = true
console.log(b1)

b1 = 0
console.log(b1)

b1 = 0
console.log(!!b1)
console.log(!b1)

console.log('Verdadeiros')
console.log(!!4)
console.log(!!-99)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(b1 = 99))
console.log('Falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(b1 = false))

console.log(!!('' || null || 0 || ' '))
console.log(!!('' || null || 0 || 'Teste'))
console.log(('' || null || 0 || 'Teste'))

let l1 = ''
console.log(l1 || '...')
l1 = '[..]'
console.log(l1 || '...')