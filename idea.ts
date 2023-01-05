const arr = [[0, 1, 2, 3, 4], []]

let value = 5
let steps = 0
let incrementer = 1
while (value <= 4096) {
  steps++
  if (steps === 6) {
    arr.push([])
    incrementer *= 2
    steps = 0
  } else {
    arr[arr.length - 1].push(value)
    value += incrementer
  }
}

for (const set of arr) {
  console.log(...set.map(v => ("" + v).padStart(4) + ","))
}
