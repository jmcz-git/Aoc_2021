// part one
// number of successive increments in array
let solve_part_one = (lst) => (
  lst.split('\n')
     .map(s => Number(s))
     .map((n,i,l) => n < l[i+1])
     .reduce((p,c) => p + c))

// part two
// number of successive incremetns of the
// "3-measurement sliding window"
let solve_part_two = (lst) => (
  lst.split('\n')
     .map(s => Number(s))
     .map((n,i,a) => i+2 < a.length ? n + a[i+1] + a[i+2] : null)
     .filter(n => !(n === null))
     .map((n,i,l) => n < l[i+1])
     .reduce((p,c) => p + c))
