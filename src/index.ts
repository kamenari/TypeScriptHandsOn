console.log("Node path = " + process.argv[0])
console.log("script file path = " + process.argv[1])

const data: number[] = []
for (var i = 2; i < process.argv.length; i++) {
    data.push(Number(process.argv[i]))
}
console.log(data)
console.log(`parameters: ${data}`)

const f = aggergate()

for (let item of data) {
  const res = f(item)
  console.log(res)
}

function aggergate(): (n:number) => [number, number, number, number, number] {
  let total = 0
  let totalp = 0
  let totalt = 0
  return (n:number):[number, number, number, number, number] => {
    total += n
    let tax = Math.floor(n - n / 1.1)
    totalp += n - tax
    totalt += tax
    return [n, tax, total, totalp, totalt]
  }
}