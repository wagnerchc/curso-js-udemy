//89 - Date
//Date()
//Date(yyyy,mm,dd)

console.log(new Date())
console.log(new Date(2022,10,21))
console.log(new Date(01578900050000))

//90 - Date (continuação)
let dataTeste = new Date()
console.log(dataTeste.setMonth(1))
console.log(new Date(dataTeste.setMonth(11)))
console.log(Date.parse('Apr 22, 2019'))
console.log(Date.now())
console.log(new Date(Date.now()))